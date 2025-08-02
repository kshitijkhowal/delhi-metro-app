import BackArrowIcon from '@/app/assets/icons/arrowIcons/backArrowIcon';
import MagnifineGlassIcon from '@/app/assets/icons/searchIcons/magnifineGlassIcon';
import AppTextInput from '@/app/components/AppTextInput';
import { useColors } from '@/app/contexts/ThemeContext';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Dimensions } from '../../constants/dimensions/dimensions';
import styles from './styles';
import type { HeaderComponentProps, HeaderIconMapItem } from './types';
import { useHeaderComponentLogic } from './useheaderComponentLogic';

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  values,
  iconMap,
  leftIcon,
  onLayout,
  noBackButton = false,
  enableSearch = false,
  onSearchChange,
  onSearchOpen,
  onSearchClose,
  searchPlaceholder = 'Search...',
}) => {
  const colors = useColors();
  const {
    backgroundColor,
    titleColor,
    subTitleColor,
    handleOnBack,
    searchActive,
    openSearch,
    closeSearch,
    inputRef,
    animatedSearchStyle,
    HeaderOnLayout,
  } = useHeaderComponentLogic({ enableSearch, onSearchOpen, onSearchClose, onLayout });

  const renderIcon = (iconItem: HeaderIconMapItem, index?: number) => (
    <Pressable
      key={index?.toString() || 'left-icon'}
      style={[styles.iconButton, { marginRight: index !== undefined && index === iconMap.length - 1 && !enableSearch ? 0 : Dimensions.MARGIN.xs }]}
      onPress={iconItem.onPress}
    >
      {iconItem.imageFile ? (
        <View style={styles.iconImageFile}>{iconItem.imageFile}</View>
      ) : iconItem.image ? (
        <View style={styles.iconImageRow}>
          <Image resizeMode={'contain'} style={styles.iconImage} source={iconItem.image} />
          <Text style={[styles.iconText, { color: iconItem.color || titleColor }]}>{iconItem.rightText}</Text>
        </View>
      ) : (
        <Text style={[styles.iconText, { color: iconItem.color || titleColor }]}>{iconItem.rightText}</Text>
      )}
      {iconItem.badge ? (
        <View style={[styles.badge, { backgroundColor: iconItem.badge !== '--' ? (iconItem.color || titleColor) : 'red', height: iconItem.badge !== '--' ? 12 : 8, width: iconItem.badge !== '--' ? 15 : 8 }] }>
          {iconItem.badge !== '--' ? (
            <Text style={styles.badgeText}>{iconItem.badge}</Text>
          ) : null}
        </View>
      ) : (
        <View />
      )}
    </Pressable>
  );

  return (
    <View style={[styles.headerContainer, { backgroundColor }]} onLayout={HeaderOnLayout}>
      <View style={styles.leftSection}>
        {leftIcon ? (
          renderIcon(leftIcon)
        ) : !noBackButton ? (
          <Pressable onPress={handleOnBack} style={styles.backButton}>
            <BackArrowIcon strokeColor={colors.text.primary} size={22}/>
          </Pressable>
        ) : (
          <View style={styles.backButton} />
        )}
        <View style={styles.titleSection}>
          <Text numberOfLines={1} style={[styles.title, { color: titleColor }]}> 
            {values.title}
          </Text>
          {values.subTitle ? (
            <Text style={[styles.subTitle, { color: subTitleColor }]}>{values.subTitle}</Text>
          ) : null}
        </View>
      </View>
      <View style={styles.rightSection}>
        {iconMap.map((item: HeaderIconMapItem, index) => renderIcon(item, index))}
        {/* Search icon */}
        {enableSearch && (
          <Pressable style={styles.iconButton} onPress={openSearch}>
            <MagnifineGlassIcon strokeColor={colors.text.primary} size={22} rotation={270}/>
          </Pressable>
        )}
      </View>
      {/* Animated search bar overlay */}
      {enableSearch && searchActive && (
        <Animated.View style={[styles.searchOverlay, animatedSearchStyle, {backgroundColor}]}> 
          <Pressable style={styles.searchBackButton} onPress={closeSearch}>
            <BackArrowIcon strokeColor={colors.text.primary} size={22} rotation={180}/>
          </Pressable>
          <AppTextInput
            onChangeText={onSearchChange}
            placeholder={searchPlaceholder}
            returnKeyType="search"
            style={[
              styles.searchInput,
              {
                borderColor: colors.border.primary,
                color: colors.text.primary,
              },
            ]}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default HeaderComponent;
