import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import styles from './styles';
import { useSplashScreenLogic } from './useSplashScreenLogic';

const SplashScreen = () => {
  const { loading } = useSplashScreenLogic();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      router.replace('/'); // Navigate to main app screen (adjust as needed)
    }
  }, [loading, router]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.text}>Loading Metro Data...</Text>
    </View>
  );
};

export default SplashScreen;
