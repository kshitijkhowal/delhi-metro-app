import React from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import AppTextInput from '../../components/AppTextInput';
import { HeaderComponent } from '../../components/headerComponent';
import { Stop } from '../../types/gtfs.types';
import { styles } from './styles';
import { StationPickerScreenProps } from './types';
import { useStationPickerScreenLogic } from './useStationPickerScreenLogic';
import ScreenWrapper from '@/app/wrapper/ScreenWrapper/ScreenWrapper';

const StationPickerScreen: React.FC<StationPickerScreenProps> = ({ route }) => {
  const {
    searchQuery,
    setSearchQuery,
    filteredStops,
    handleStationSelect,
    handleBackPress,
    title,
  } = useStationPickerScreenLogic(route);

  const renderStationItem = ({ item }: { item: Stop }) => (
    <TouchableOpacity
      style={styles.stationItem}
      onPress={() => handleStationSelect(item)}
      activeOpacity={0.7}
    >
      <Text style={styles.stationName}>{item.stop_name}</Text>
      {item.stop_code && (
        <Text style={styles.stationCode}>Code: {item.stop_code}</Text>
      )}
    </TouchableOpacity>
  );

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        {searchQuery.trim() 
          ? 'No stations found matching your search'
          : 'No stations available'
        }
      </Text>
    </View>
  );

  const renderLoading = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#473391" />
    </View>
  );

  return (
    <ScreenWrapper>

    <View style={styles.container}>
      <HeaderComponent
        values={{ title }}
        iconMap={[]}
        theme="primary"
        noBackButton={false}
        actions={{ onLeftPress: handleBackPress }}
      />
      
      <View style={styles.searchContainer}>
        <AppTextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search stations..."
          autoCapitalize="words"
          autoCorrect={false}
        />
      </View>

      <FlatList
        style={styles.listContainer}
        data={filteredStops}
        renderItem={renderStationItem}
        keyExtractor={(item) => item.stop_id.toString()}
        ListEmptyComponent={renderEmptyList}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />
    </View>
    </ScreenWrapper>

  );
};

export default StationPickerScreen;
