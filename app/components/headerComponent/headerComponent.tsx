import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Dimensions } from '../../constants/dimensions/dimensions';
import styles from './styles';
import type { HeaderComponentProps, HeaderIconMapItem } from './types';
import { useHeaderComponentLogic } from './useheaderComponentLogic';
import BackArrowIcon from '@/app/assets/icons/arrowIcons/backArrowIcon';
import { Colors } from '@/app/constants/colors/colors';

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  values,
  iconMap,
  onLayout,
  noBackButton = false,
  theme = 'white',
}) => {
  const {
    backgroundColor,
    titleColor,
    subTitleColor,
    handleOnBack,
  } = useHeaderComponentLogic({ theme });

  return (
    <View style={[styles.headerContainer, { backgroundColor }]} onLayout={onLayout}>
      <View style={styles.leftSection}>
        {!noBackButton ? (
          <Pressable onPress={handleOnBack} style={styles.backButton}>
            <BackArrowIcon strokeColor={theme === 'white' ? Colors.text.primary : Colors.text.inverse}/>
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
            style={[styles.iconButton, { marginRight: index === iconMap.length - 1 ? 0 : Dimensions.MARGIN.xs }]}
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
      </View>
    </View>
  );
};

export default HeaderComponent;
