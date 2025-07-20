import { RecentRoute } from '@/app/redux/features/recentRoutes/recentRoutes';
import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useSuggestionListItemLogic } from './useSuggestionListItemLogic';
import AppView from '@/app/components/AppView';

interface SuggestionListItemProps {
  route: RecentRoute;
  onPress: (route: RecentRoute) => void;
}

const SuggestionListItem: React.FC<SuggestionListItemProps> = ({ route, onPress }) => {
  const { fromName, toName } = useSuggestionListItemLogic(route);
  return (
    <AppView style={styles.container1} onPress={() => onPress(route)} elevation={{enabled:true}}>
        <View style={styles.container1_1}>
            <Text style={styles.stationName}>{fromName}</Text>
            <Text style={styles.stationName}>{toName}</Text>
        </View>
        <View style={styles.container1_2}>

        </View>

    </AppView>
  );
};

export default SuggestionListItem;
