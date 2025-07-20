import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    gap: Dimensions.MARGIN.xxxs
  },
  infoContainer: {
    flex: 1,

  },
  stationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  hindiName: {
    fontSize: 14,
    color: '#666',
  },
  stationCode: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  linesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineChip: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 4,
    marginRight: 0,
    marginVertical: 2,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineChipText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
});
