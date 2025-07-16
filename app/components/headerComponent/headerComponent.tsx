import BackArrowIcon from '@/app/assets/icons/arrowIcons/backArrowIcon';
import MagnifineGlassIcon from '@/app/assets/icons/searchIcons/magnifineGlassIcon';
import AppTextInput from '@/app/components/AppTextInput';
import { Colors } from '@/app/constants/colors/colors';
import React from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Dimensions } from '../../constants/dimensions/dimensions';
import styles from './styles';
import type { HeaderComponentProps, HeaderIconMapItem } from './types';
import { useHeaderComponentLogic } from './useheaderComponentLogic';


const HeaderComponent: React.FC<HeaderComponentProps> = ({
  values,
  iconMap,
  onLayout,
  noBackButton = false,
  theme = 'secondary',
  enableSearch = false,
  onSearchChange,
  onSearchOpen,
  onSearchClose,
  searchPlaceholder = 'Search...',
}) => {
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
  } = useHeaderComponentLogic({ theme, enableSearch, onSearchOpen, onSearchClose, onLayout });

  return (
    <View style={[styles.headerContainer, { backgroundColor }]} onLayout={HeaderOnLayout}>
      <View style={styles.leftSection}>
        {!noBackButton ? (
          <Pressable onPress={handleOnBack} style={styles.backButton}>
            <BackArrowIcon strokeColor={theme === 'secondary' ? Colors.text.primary : Colors.text.inverse} size={22}/>
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
        {iconMap.map((item: HeaderIconMapItem, index) => (
          <Pressable
            key={index.toString()}
            style={[styles.iconButton, { marginRight: index === iconMap.length - 1 && !enableSearch ? 0 : Dimensions.MARGIN.xs }]}
            onPress={item.onPress}
          >
            {item.imageFile ? (
              <View style={styles.iconImageFile}>{item.imageFile}</View>
            ) : item.image ? (
              <View style={styles.iconImageRow}>
                <Image resizeMode={'contain'} style={styles.iconImage} source={item.image} />
                <Text style={[styles.iconText, { color: item.color || titleColor }]}>{item.rightText}</Text>
              </View>
            ) : (
              <Text style={[styles.iconText, { color: item.color || titleColor }]}>{item.rightText}</Text>
            )}
            {item.badge ? (
              <View style={[styles.badge, { backgroundColor: item.badge !== '--' ? (item.color || titleColor) : 'red', height: item.badge !== '--' ? 12 : 8, width: item.badge !== '--' ? 15 : 8 }] }>
                {item.badge !== '--' ? (
                  <Text style={styles.badgeText}>{item.badge}</Text>
                ) : null}
              </View>
            ) : (
              <View />
            )}
          </Pressable>
        ))}
        {/* Search icon */}
        {enableSearch && (
          <Pressable style={styles.iconButton} onPress={openSearch}>
            <MagnifineGlassIcon strokeColor={theme === 'secondary' ? Colors.text.primary : Colors.text.inverse} size={22} rotation={270}/>
          </Pressable>
        )}
      </View>
      {/* Animated search bar overlay */}
      {enableSearch && searchActive && (
        <Animated.View style={[styles.searchOverlay, animatedSearchStyle, {backgroundColor}]}>
          <Pressable style={styles.searchBackButton} onPress={closeSearch}>
            <BackArrowIcon strokeColor={theme === 'secondary' ? Colors.text.primary : Colors.text.inverse} size={22} rotation={180}/>
          </Pressable>
          <AppTextInput
            ref={inputRef}
            onChangeText={onSearchChange}
            placeholder={searchPlaceholder}
            placeholderTextColor={theme === 'primary' ? Colors.text.inverse : Colors.text.primary}
            returnKeyType="search"
            style={[
              styles.searchInput,
              {
                borderColor: theme === 'primary' ? Colors.text.inverse : Colors.border.input,
                color: theme === 'primary' ? Colors.text.inverse : Colors.text.primary,
              },
            ]}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default HeaderComponent;
