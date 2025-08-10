import DoubleSwitchArrow from '@/app/assets/icons/arrowIcons/doubleSwitchArrow';
import BinIcon from '@/app/assets/icons/gestureIcons/bin';
import HeartIcon from '@/app/assets/icons/gestureIcons/heartIcon';
import MetroSideViewAnimated from '@/app/assets/icons/metroIcons/metroSideViewAnimated';
import AppView from '@/app/components/AppView';
import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { useColors } from '@/app/contexts/ThemeContext';
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
  const colors = useColors();
  const { fromName, toName, animatedIconStyle, handleLayout, handleMetroLayout, containerWidth, onHeart, onSwitch, onDelete, isFavourite, animatedSwitchStyle } = useSuggestionListItemLogic(route);

  return (
    <AppView
      style={[styles.container1, { 
        backgroundColor: colors.View.primary,
        borderColor: colors.border.primary 
      }]}
      onPress={() => onPress(route)}
      elevation={{ enabled: true }}
    >
      <View style={styles.container1_1}>
        <Text style={[styles.stationName, { color: colors.text.primary }]}>{fromName}</Text>
        <Text style={[styles.stationName, { color: colors.text.primary }]}>{toName}</Text>
      </View>
      <View style={[styles.container1_2, styles.relative]} onLayout={handleLayout}>
        {containerWidth > 0 && (
          <View style={[styles.line, { 
            width: containerWidth - Dimensions.MARGIN.xxs,
            backgroundColor: colors.text.secondary 
          }]} />
        )}
        <View style={[styles.dot, { backgroundColor: colors.text.secondary }]} />
        <View style={[styles.dot, { backgroundColor: colors.text.secondary }]} />
        {/* Animated Icon */}
        <Animated.View 
          style={[animatedIconStyle, { backgroundColor: 'transparent'}]}
          onLayout={handleMetroLayout}
        >
          <MetroSideViewAnimated size={Dimensions.MARGIN.lg} />
        </Animated.View>
        {/* Icon Buttons */}
      </View>
      <View style={styles.iconButtonRow}>
        <AppView
          onPress={onDelete}
          style={[styles.iconButton, { borderColor: colors.border.primary, backgroundColor: colors.View.secondary }]}
          elevation={{ enabled: true }}
        >
          <BinIcon size={22} strokeWidth={1.5} />
        </AppView>
        <View style={styles.switchHeartContainer}>
          <AppView
            onPress={onHeart}
            style={[styles.iconButton, { borderColor: colors.border.primary }]}
            elevation={{ enabled: true }}
          >
            <HeartIcon size={20} strokeWidth={2} fillColor={isFavourite ? 'red' : colors.background.primary} />
          </AppView>
          <AppView
            onPress={onSwitch}
            style={[styles.iconButton, { borderColor: colors.border.primary }]}
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
