import React from 'react';
import { Pressable, PressableProps, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { ElevationConfig, useAppViewLogic } from './useAppViewLogic';

export type AppViewProps = {
    onPress?: () => void;
    disabled?: boolean;
    style?: ViewStyle | ViewStyle[];
    elevation?: ElevationConfig;
    children?: React.ReactNode;
} & PressableProps;

const AppView = ({
    onPress,
    disabled = false,
    style,
    elevation,
    children,
    ...rest
}: AppViewProps) => {
    const { handlePressIn, handlePressOut, boxShadow, scale } = useAppViewLogic(
        disabled,
        onPress,
        elevation
    );

    const animatedStyle = {
        transform: [{ scale: scale }],
        boxShadow,
    };

    return (
        <Pressable
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            disabled={disabled}
            {...rest}
        >
            <Animated.View style={[animatedStyle, style]}>
                {children}
            </Animated.View>
        </Pressable>
    );
};

export default AppView;
