import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  segmentedControlContainer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
  },
  segment: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    fontSize: 16,
    color: '#333',
  },
  segmentSelected: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
