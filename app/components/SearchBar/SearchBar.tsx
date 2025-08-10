import CrossIcon from '@/app/assets/icons/gestureIcons/crossIcon';
import MagnifineGlassIcon from '@/app/assets/icons/searchIcons/magnifineGlassIcon';
import React, { forwardRef, useCallback } from 'react';
import { TextInput, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { styles } from './styles';
import type { SearchBarImperativeHandler, SearchBarProps } from './types';
import { useSearchBarLogic } from './useSearchBarLogic';

const SearchBar = forwardRef<SearchBarImperativeHandler, SearchBarProps>((props, ref) => {
    const {
        inputRef,
        handleTextChange,
        handleSearch,
        handleFocus,
        handleBlur,
        handleClear,
        colors,
        placeholder,
        value,
        disabled,
        searchIconStyle,
        crossIconStyle,
    } = useSearchBarLogic(props, ref);

    const handleSubmitEditing = useCallback(() => {
        handleSearch(value);
    }, [handleSearch, value]);

    return (
        <View style={[styles.container, { backgroundColor: colors.background.primary }]}>

            {/* Input Field */}
            <TextInput
                ref={inputRef}
                style={[styles.input, { color: colors.text.primary }]}
                placeholder={placeholder}
                placeholderTextColor={colors.text.secondary}
                value={value}
                onChangeText={handleTextChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onSubmitEditing={handleSubmitEditing}
                returnKeyType="search"
                editable={!disabled}
                autoCorrect={false}
                autoCapitalize="none"
                autoComplete="off"
            />
            
            {/* Search Icon (fades out when text is present) */}
            <Animated.View style={[styles.searchIcon, searchIconStyle]}>
                <MagnifineGlassIcon
                    strokeColor={colors.text.primary}
                    size={20}
                    strokeWidth={3}
                />
            </Animated.View>
            
            {/* Cross Icon (fades in when text is present) */}
            <Animated.View style={[styles.crossIcon, crossIconStyle]}>
                <CrossIcon
                    strokeColor={colors.text.primary}
                    size={20}
                    onPress={handleClear}
                    strokeWidth={2}
                />
            </Animated.View>
        </View>
    );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;
