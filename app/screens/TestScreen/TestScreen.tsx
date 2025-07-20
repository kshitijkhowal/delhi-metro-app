import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import MetroSideViewAnimated from '../../assets/icons/metroIcons/metroSideViewAnimated';
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

const TestScreen = () => (
  <ScrollView contentContainerStyle={{ padding: 24 }} style={{backgroundColor:'white'}}>
    <MetroSideViewAnimated strokeWidth={1} size={300}/>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Font Family Visual Test</Text>
    {fontFamilies.map((font) => (
      <View key={font} style={{ marginBottom: 8 }}>
        <Text style={{ fontFamily: font, fontSize: 18 }}>{font}</Text>
      </View>
    ))}
  </ScrollView>
);

export default TestScreen;
