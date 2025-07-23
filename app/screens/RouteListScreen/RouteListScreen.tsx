import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from 'react-native';
import { HeaderComponent } from '../../components/headerComponent';
import { RouteListScreenProps } from './RouteListScreen.Types';
import { styles } from './styles';
import { useRouteListScreenLogic } from './useRouteListScreenLogic';
import { MaterialIcons } from '@expo/vector-icons'; // for icons

const RouteListScreen: React.FC<RouteListScreenProps> = ({ route }) => {
  const {
    routeSegments,
    totalDuration,
    totalStops,
    loading,
    handleBackPress,
    formatDuration,
    fromStation,
    toStation,
  } = useRouteListScreenLogic(route);

  const renderRouteStop = ({ item, index }: any) => {
    const isLast = index === routeSegments.length - 1;
    const nextStop = routeSegments[index + 1]?.stop;
    const isTransfer = item.isTransfer;

    return (
      <View style={styles.segmentItem}>
        {/* Top connector line */}
        {index > 0 && <View style={styles.verticalLine} />}

        <View style={styles.stopRow}>
          <View style={styles.iconWrapper}>
            {isTransfer ? (
              <MaterialIcons name="swap-horiz" size={24} color="#ff6f61" />
            ) : (
              <View style={styles.stopDot} />
            )}
          </View>

          <View style={styles.stopDetails}>
            <Text style={styles.stationName}>
              {item.stop.stop_name}
            </Text>
            <Text style={styles.timeText}>
              Time to reach: {formatDuration(item.timeToReach)}
            </Text>
            {isTransfer && (
              <Text style={styles.transferNote}>Transfer here</Text>
            )}
            {!isLast && nextStop && (
              <Text style={styles.towardsText}>→ {nextStop.stop_name}</Text>
            )}
          </View>
        </View>
      </View>
    );
  };

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        {loading ? 'Finding best route...' : 'No route found between these stations'}
      </Text>
    </View>
  );

  const renderLoading = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#473391" />
      <Text style={styles.emptyText}>Calculating route...</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderComponent
        values={{ title: 'Route Details' }}
        iconMap={[]}
        theme="primary"
        noBackButton={false}
        actions={{ onLeftPress: handleBackPress }}
      />

      <View style={styles.headerContainer}>
        <View style={styles.routeInfo}>
          <Text style={styles.routeTitle}>
            {fromStation.stop_name} → {toStation.stop_name}
          </Text>
          <Text style={styles.routeSubtitle}>
            Total Stops: {totalStops}
          </Text>
        </View>

        <View style={styles.durationContainer}>
          <Text style={styles.durationText}>
            Total Time: {formatDuration(totalDuration)}
          </Text>
        </View>
      </View>

      {loading ? (
        renderLoading()
      ) : (
        <FlatList
          style={styles.listContainer}
          data={routeSegments}
          renderItem={renderRouteStop}
          keyExtractor={(item, index) => `${item.stop.stop_id}-${index}`}
          ListEmptyComponent={renderEmptyList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default RouteListScreen;
