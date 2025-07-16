import ScreenWrapper from '@/app/wrapper/ScreenWrapper/ScreenWrapper';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View
} from 'react-native';
import { HeaderComponent } from '../../components/headerComponent';
import { Stop } from '../../types/gtfs.types';
import StationListItem from './StationListItem';
import { styles } from './styles';
import { StationPickerScreenProps } from './types';
import { useStationPickerScreenLogic } from './useStationPickerScreenLogic';
import { Colors } from '@/app/constants/colors/colors';

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
    <StationListItem stop={item} onPress={handleStationSelect} />
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
    <ScreenWrapper
      screenName='StationPickerScreen'
      backgroundColor={Colors.background.earn}
    >

    <View style={styles.container}>
      <HeaderComponent
        values={{ title }}
        iconMap={[]}
        theme="primary"
        noBackButton={false}
        actions={{ onLeftPress: handleBackPress }}
        enableSearch={true}
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Search stations..."
      />

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
