import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
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
    marginTop: 2,
  },
  stationCode: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  linesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
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
