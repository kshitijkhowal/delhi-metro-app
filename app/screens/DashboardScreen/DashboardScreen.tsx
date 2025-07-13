import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { useDashboardScreenLogic } from './useDashboardScreenLogic';

const DashboardScreen = () => {
  const {} = useDashboardScreenLogic();

  return (
    <View style={styles.container}>
      <Text>Dashboard Screen</Text>
    </View>
  );
};

export default DashboardScreen;
