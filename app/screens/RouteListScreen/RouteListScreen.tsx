import React from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View,
} from 'react-native';
import { HeaderComponent } from '../../components/headerComponent';
import { styles } from './styles';
import { RouteListScreenProps, RouteSegment } from './types';
import { useRouteListScreenLogic } from './useRouteListScreenLogic';

const RouteListScreen: React.FC<RouteListScreenProps> = ({ route }) => {
  const {
    routeSegments,
    totalDuration,
    loading,
    handleBackPress,
    formatDuration,
    fromStation,
    toStation,
  } = useRouteListScreenLogic(route);

  const renderRouteSegment = ({ item, index }: { item: RouteSegment; index: number }) => (
    <View style={styles.segmentItem}>
      <View style={styles.segmentHeader}>
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <View style={styles.lineIndicator} />
          <Text style={styles.stationName}>
            {index === 0 ? fromStation.stop_name : item.fromStop.stop_name}
          </Text>
        </View>
        <Text style={styles.duration}>
          {formatDuration(item.duration)}
        </Text>
      </View>
      <Text style={styles.routeSubtitle}>
        to {item.toStop.stop_name}
      </Text>
    </View>
  );

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
            {routeSegments.length} segments
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
          renderItem={renderRouteSegment}
          keyExtractor={(item, index) => `${item.fromStop.stop_id}-${item.toStop.stop_id}-${index}`}
          ListEmptyComponent={renderEmptyList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default RouteListScreen;

