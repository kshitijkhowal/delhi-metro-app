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
import ScreenWrapper from '@/app/wrapper/ScreenWrapper/ScreenWrapper';
import RouteHeaderComponent from './RouteHeaderComponent';

const RouteListScreen: React.FC<RouteListScreenProps> = ({ route }) => {
  const {
    routeSegments,
    loading,
    handleBackPress,
    headerData
  } = useRouteListScreenLogic(route);


  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        {loading ? 'Finding best route...' : 'No route found between these stations'}
      </Text>
    </View>
  );

  return (
    <ScreenWrapper
      screenName={'RouteListScreen'}
      loading={loading}
    >
      <HeaderComponent
        values={{ title: 'Route Details' }}
        iconMap={[]}
        noBackButton={false}
        actions={{ onLeftPress: handleBackPress }}
      />

      {headerData && <RouteHeaderComponent data={headerData}/>}

      <FlatList
        style={styles.listContainer}
        data={routeSegments}
        renderItem={null}
        keyExtractor={(item, index) => `${item.stop.stop_id}-${index}`}
        ListEmptyComponent={renderEmptyList}
        showsVerticalScrollIndicator={false}
      />

    </ScreenWrapper>
  );
};

export default RouteListScreen;
