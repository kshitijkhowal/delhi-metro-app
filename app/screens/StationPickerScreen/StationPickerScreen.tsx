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
import { SearchBar } from '../../components/SearchBar';
import { Stop } from '../../types/gtfs.types';
import StationListItem from './StationListItem';
import { StationPickerScreenProps } from './StationPickerScreen.Types';
import { styles } from './styles';
import { useStationPickerScreenLogic } from './useStationPickerScreenLogic';
import { AppKeyboardStickyView } from '@/app/components/AppKeyboardStickyView';

const StationPickerScreen: React.FC<StationPickerScreenProps> = ({ route }) => {
  const colors = useThemeColors();
  const {
    searchQuery,
    filteredStops,
    handleStationSelect,
    handleBackPress,
    handleSearchChange,
    handleSearchSubmit,
    handleSearchClear,
    searchBarRef,
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

      {/* Search Bar */}
      <AppKeyboardStickyView>
      <View style={[styles.searchContainer]}>
        <SearchBar
          ref={searchBarRef}
          placeholder="Search for stations..."
          value={searchQuery}
          onChangeText={handleSearchChange}
          onSearch={handleSearchSubmit}
          onClear={handleSearchClear}
        />
      </View>
      </AppKeyboardStickyView>
    </ScreenWrapper>

  );
};

export default StationPickerScreen;
