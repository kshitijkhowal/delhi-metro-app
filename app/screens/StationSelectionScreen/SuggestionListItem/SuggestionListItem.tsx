import MetroSideViewAnimated from '@/app/assets/icons/metroIcons/metroSideViewAnimated';
import AppView from '@/app/components/AppView';
import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { RecentRoute } from '@/app/redux/features/recentRoutes/recentRoutes';
import React from 'react';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styles from './styles';
import { useSuggestionListItemLogic } from './useSuggestionListItemLogic';

interface SuggestionListItemProps {
  route: RecentRoute;
  onPress: (route: RecentRoute) => void;
}

const SuggestionListItem: React.FC<SuggestionListItemProps> = ({ route, onPress }) => {
  const { fromName, toName, animatedIconStyle, handleLayout, containerWidth } = useSuggestionListItemLogic(route);

  return (
    <AppView
      style={styles.container1}
      onPress={() => onPress(route)}
      elevation={{ enabled: true }}
    >
      <View style={styles.container1_1}>
        <Text style={styles.stationName}>{fromName}</Text>
        <Text style={styles.stationName}>{toName}</Text>
      </View>
      <View style={[styles.container1_2, styles.relative]} onLayout={handleLayout}>
        {containerWidth > 0 && (
          <View style={[styles.line, { width: containerWidth - styles.dot.width }]} />
        )}
        <View style={styles.dot} />
        <View style={styles.dot} />
        {/* Animated Icon */}
        <Animated.View style={[animatedIconStyle]}>
          <MetroSideViewAnimated size={Dimensions.MARGIN.lg} />
        </Animated.View>
      </View>
    </AppView>
  );
};

export default SuggestionListItem;
