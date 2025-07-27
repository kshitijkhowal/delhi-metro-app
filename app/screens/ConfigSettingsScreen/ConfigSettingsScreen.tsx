import { useThemeColors } from '@/app/hooks/useThemeColors';
import { setTheme } from '@/app/redux/features/deviceConfig/uiPreferences';
import { useAppDispatch, useAppSelector } from '@/app/redux/hook';
import ScreenWrapper from '@/app/wrapper/ScreenWrapper/ScreenWrapper';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const THEME_OPTIONS = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System', value: 'system' },
];

const ConfigSettingsScreen : FC = () => {
  const theme = useAppSelector((state) => state.uiPreferences.theme);
  const dispatch = useAppDispatch();
  const Colors = useThemeColors();

  return (
    <ScreenWrapper screenName='iuyg' backgroundColor={Colors.background.primary}>
      <View style={styles.container}>
        <Text style={styles.title}>Theme</Text>
        <View style={styles.segmentedControlContainer}>
          {THEME_OPTIONS.map((option) => (
            <Text
              key={option.value}
              style={[
                styles.segment,
                theme === option.value && styles.segmentSelected,
                theme === option.value && { color: Colors.theme.primary },
              ]}
              onPress={() => dispatch(setTheme(option.value as any))}
            >
              {option.label}
            </Text>
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ConfigSettingsScreen;
