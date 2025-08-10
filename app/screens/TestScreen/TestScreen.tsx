import { useThemeColors } from '@/app/hooks/useThemeColors';
import { setTheme } from '@/app/redux/features/deviceConfig/uiPreferences';
import { useAppDispatch, useAppSelector } from '@/app/redux/hook';
import React, { useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import MetroSideViewAnimated from '../../assets/icons/metroIcons/metroSideViewAnimated';
import AppTextInput from '../../components/AppTextInput';
import { SearchBar, type SearchBarImperativeHandler } from '../../components/SearchBar';

const fontFamilies = [
  'Roboto-Regular', 'Roboto-Bold', 'Roboto-Medium', 'Roboto-Light', 'Roboto-Thin', 'Roboto-Black',
  'Roboto-Italic', 'Roboto-BoldItalic', 'Roboto-MediumItalic', 'Roboto-LightItalic', 'Roboto-ThinItalic', 'Roboto-BlackItalic',
  'Roboto-ExtraBold', 'Roboto-ExtraBoldItalic', 'Roboto-ExtraLight', 'Roboto-ExtraLightItalic',
  'Roboto-SemiBold', 'Roboto-SemiBoldItalic',
  'Roboto_Condensed-Regular', 'Roboto_Condensed-Bold', 'Roboto_Condensed-BoldItalic', 'Roboto_Condensed-Italic',
  'Roboto_Condensed-Light', 'Roboto_Condensed-LightItalic', 'Roboto_Condensed-Medium', 'Roboto_Condensed-MediumItalic',
  'Roboto_Condensed-SemiBold', 'Roboto_Condensed-SemiBoldItalic', 'Roboto_Condensed-Black', 'Roboto_Condensed-BlackItalic',
  'Roboto_Condensed-Thin', 'Roboto_Condensed-ThinItalic', 'Roboto_Condensed-ExtraBold', 'Roboto_Condensed-ExtraBoldItalic',
  'Roboto_Condensed-ExtraLight', 'Roboto_Condensed-ExtraLightItalic',
  'Roboto_SemiCondensed-Regular', 'Roboto_SemiCondensed-Bold', 'Roboto_SemiCondensed-BoldItalic', 'Roboto_SemiCondensed-Italic',
  'Roboto_SemiCondensed-Light', 'Roboto_SemiCondensed-LightItalic', 'Roboto_SemiCondensed-Medium', 'Roboto_SemiCondensed-MediumItalic',
  'Roboto_SemiCondensed-SemiBold', 'Roboto_SemiCondensed-SemiBoldItalic', 'Roboto_SemiCondensed-Black', 'Roboto_SemiCondensed-BlackItalic',
  'Roboto_SemiCondensed-Thin', 'Roboto_SemiCondensed-ThinItalic', 'Roboto_SemiCondensed-ExtraBold', 'Roboto_SemiCondensed-ExtraBoldItalic',
  'Roboto_SemiCondensed-ExtraLight', 'Roboto_SemiCondensed-ExtraLightItalic',
];

const TestScreen = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.uiPreferences.theme);
  const colors = useThemeColors();
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [searchText, setSearchText] = useState('');
  
  // SearchBar imperative handler ref
  const searchBarRef = useRef<SearchBarImperativeHandler>(null);

  const toggleTheme = () => {
    dispatch(setTheme(currentTheme === 'light' ? 'dark' : 'light'));
  };

  const handleSearch = (text: string) => {
    console.log('Search submitted:', text);
    // Handle search logic here
  };

  // Imperative handler functions
  const focusSearchBar = () => {
    searchBarRef.current?.focus();
  };

  const clearSearchBar = () => {
    searchBarRef.current?.clear();
  };

  const submitSearch = () => {
    searchBarRef.current?.submit();
  };

  const getSearchValue = () => {
    const value = searchBarRef.current?.getValue();
    console.log('Current search value:', value);
  };

  const setSearchValue = () => {
    searchBarRef.current?.setValue('Programmatic text');
  };

  return (
    <ScrollView 
      contentContainerStyle={{ padding: 24 }} 
      style={{ backgroundColor: colors.background.primary }}
    >
      <MetroSideViewAnimated strokeWidth={1} size={300}/>
      
      {/* Theme Testing Section */}
      <View style={{ marginBottom: 24 }}>
        <Text style={{ 
          fontSize: 20, 
          fontWeight: 'bold', 
          marginBottom: 16,
          color: colors.text.primary 
        }}>
          Animated Floating Label Inputs
        </Text>
        
        <TouchableOpacity 
          onPress={toggleTheme}
          style={{
            backgroundColor: colors.theme.primary,
            padding: 12,
            borderRadius: 8,
            marginBottom: 16,
          }}
        >
          <Text style={{ 
            color: colors.text.primary, 
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Toggle Theme (Current: {currentTheme})
          </Text>
        </TouchableOpacity>

        <View style={{ marginBottom: 16 }}>
          <AppTextInput
            placeholder="Enter your name"
            value={inputValue}
            onChangeText={setInputValue}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <AppTextInput
            placeholder="Enter your email"
            value={emailValue}
            onChangeText={setEmailValue}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <AppTextInput
            placeholder="Enter your password"
            value={passwordValue}
            onChangeText={setPasswordValue}
            secureTextEntry
          />
        </View>
      </View>

      {/* SearchBar Testing Section */}
      <View style={{ marginBottom: 24 }}>
        <Text style={{ 
          fontSize: 20, 
          fontWeight: 'bold', 
          marginBottom: 16,
          color: colors.text.primary 
        }}>
          SearchBar Component (with Imperative Handler)
        </Text>
        
        <View style={{ marginBottom: 16 }}>
          <SearchBar
            ref={searchBarRef}
            placeholder="Search for stations..."
            value={searchText}
            onChangeText={setSearchText}
            onSearch={handleSearch}
          />
        </View>
        
        <Text style={{ 
          fontSize: 16,
          color: colors.text.secondary,
          marginBottom: 16,
          textAlign: 'center'
        }}>
          Current search: {searchText || 'None'}
        </Text>

        {/* Imperative Handler Controls */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          <TouchableOpacity 
            onPress={focusSearchBar}
            style={{
              backgroundColor: colors.theme.primary,
              padding: 8,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: colors.text.primary, fontSize: 12 }}>Focus</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={clearSearchBar}
            style={{
              backgroundColor: colors.theme.primary,
              padding: 8,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: colors.text.primary, fontSize: 12 }}>Clear</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={submitSearch}
            style={{
              backgroundColor: colors.theme.primary,
              padding: 8,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: colors.text.primary, fontSize: 12 }}>Submit</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={getSearchValue}
            style={{
              backgroundColor: colors.theme.primary,
              padding: 8,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: colors.text.primary, fontSize: 12 }}>Get Value</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={setSearchValue}
            style={{
              backgroundColor: colors.theme.primary,
              padding: 8,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: colors.text.primary, fontSize: 12 }}>Set Value</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Font Family Testing Section */}
      <Text style={{ 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 16,
        color: colors.text.primary 
      }}>
        Font Family Visual Test
      </Text>
      {fontFamilies.map((font) => (
        <View key={font} style={{ marginBottom: 8 }}>
          <Text style={{ 
            fontFamily: font, 
            fontSize: 18,
            color: colors.text.primary 
          }}>
            {font}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default TestScreen;
