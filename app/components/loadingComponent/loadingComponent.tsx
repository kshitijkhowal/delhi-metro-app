import { Image } from 'expo-image';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface LoadingComponentProps {
  message?: string;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/animations/loadingAnimations/logo-loading.gif')} style={styles.image} />
      {message && <Text style={styles.text}>{message}</Text>}
    </View>
  );
};

export default LoadingComponent;
