import DoubleSwitchArrow from '@/app/assets/icons/arrowIcons/doubleSwitchArrow';
import BinIcon from '@/app/assets/icons/gestureIcons/bin';
import HeartIcon from '@/app/assets/icons/gestureIcons/heartIcon';
import MetroSideViewAnimated from '@/app/assets/icons/metroIcons/metroSideViewAnimated';
import AppView from '@/app/components/AppView';
import { Colors } from '@/app/constants/colors/colors';
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
  const { fromName, toName, animatedIconStyle, handleLayout, containerWidth, onHeart, onSwitch, onDelete, isFavourite, animatedSwitchStyle } = useSuggestionListItemLogic(route);

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
        {/* Icon Buttons */}
      </View>
      <View style={styles.iconButtonRow}>
        <AppView
          onPress={onDelete}
          style={styles.iconButton}
          elevation={{ enabled: true }}
        >
          <BinIcon size={22} strokeWidth={1.5} />
        </AppView>
        <View style={styles.switchHeartContainer}>
          <AppView
            onPress={onHeart}
            style={styles.iconButton}
            elevation={{ enabled: true }}
          >
            <HeartIcon size={20} strokeWidth={2} fillColor={isFavourite ? 'red' : Colors.background.primary} />
          </AppView>
          <AppView
            onPress={onSwitch}
            style={styles.iconButton}
            elevation={{ enabled: true }}
          >
            <Animated.View style={animatedSwitchStyle}>
              <DoubleSwitchArrow size={22} strokeWidth={1.2} />
            </Animated.View>
          </AppView>
        </View>

      </View>
    </AppView>
  );
};

export default SuggestionListItem;
