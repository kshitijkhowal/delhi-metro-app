import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { useThemeColors } from '@/app/hooks/useThemeColors';
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
import { StationPickerScreenProps } from './StationPickerScreen.Types';
import { styles } from './styles';
import { useStationPickerScreenLogic } from './useStationPickerScreenLogic';

const StationPickerScreen: React.FC<StationPickerScreenProps> = ({ route }) => {
  const colors = useThemeColors();
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
      <Text style={[styles.emptyText, { color: colors.text.secondary }]}>
        {searchQuery.trim() 
          ? 'No stations found matching your search'
          : 'No stations available'
        }
      </Text>
    </View>
  );

  const renderLoading = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={colors.theme.primary} />
    </View>
  );

  return (
    <ScreenWrapper
      screenName='StationSelectionScreen'
    >

    <View style={styles.container}>
      <HeaderComponent
        values={{ title }}
        iconMap={[]}
        noBackButton={false}
        actions={{ onLeftPress: handleBackPress }}

      />

      <FlatList
        style={styles.listContainer}
        data={filteredStops}
        renderItem={renderStationItem}
        keyExtractor={(item) => item.stop_id.toString()}
        ListEmptyComponent={renderEmptyList}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        ItemSeparatorComponent={() => <View style={{ height: Dimensions.MARGIN.xs }} />}
      />
    </View>
    </ScreenWrapper>

  );
};

export default StationPickerScreen;
