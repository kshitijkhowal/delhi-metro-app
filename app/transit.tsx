import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Route, Stop, transitGraph } from './utils/transitGraph';

export default function TransitScreen() {
  const [stops, setStops] = useState<Stop[]>([]);
  const [selectedStop, setSelectedStop] = useState<Stop | null>(null);
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadStops();
  }, []);

  const loadStops = async () => {
    try {
      setLoading(true);
      const allStops = await transitGraph.getStops();
      setStops(allStops);
    } catch (error) {
      Alert.alert('Error', 'Failed to load stops');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const selectStop = async (stop: Stop) => {
    try {
      setSelectedStop(stop);
      const stopRoutes = await transitGraph.getRoutesForStop(stop.id);
      setRoutes(stopRoutes);
    } catch (error) {
      Alert.alert('Error', 'Failed to load routes for this stop');
      console.error(error);
    }
  };

  const findRoute = async (fromStop: Stop, toStop: Stop) => {
    try {
      setLoading(true);
      const route = await transitGraph.findRoute(fromStop.id, toStop.id);
      if (route) {
        Alert.alert('Route Found', `Route found with ${route.transfers} transfers`);
      } else {
        Alert.alert('No Route', 'No route found between these stops');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to find route');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderStop = ({ item }: { item: Stop }) => (
    <TouchableOpacity
      style={[
        styles.stopItem,
        selectedStop?.id === item.id && styles.selectedStop
      ]}
      onPress={() => selectStop(item)}
    >
      <Text style={styles.stopName}>{item.name}</Text>
      <Text style={styles.stopCoords}>
        {item.latitude.toFixed(4)}, {item.longitude.toFixed(4)}
      </Text>
    </TouchableOpacity>
  );

  const renderRoute = ({ item }: { item: Route }) => (
    <View style={styles.routeItem}>
      <Text style={styles.routeName}>{item.name}</Text>
      {item.color && (
        <View style={[styles.routeColor, { backgroundColor: item.color }]} />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delhi Metro Transit</Text>
      
      <View style={styles.content}>
        <View style={styles.stopsSection}>
          <Text style={styles.sectionTitle}>Stops ({stops.length})</Text>
          <FlatList
            data={stops}
            renderItem={renderStop}
            keyExtractor={(item) => item.id}
            style={styles.stopsList}
            showsVerticalScrollIndicator={false}
          />
        </View>

        {selectedStop && (
          <View style={styles.routesSection}>
            <Text style={styles.sectionTitle}>
              Routes at {selectedStop.name}
            </Text>
            <FlatList
              data={routes}
              renderItem={renderRoute}
              keyExtractor={(item) => item.id}
              style={styles.routesList}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            
            <TouchableOpacity
              style={styles.routeButton}
              onPress={() => {
                if (stops.length > 1) {
                  const randomStop = stops.find(s => s.id !== selectedStop.id);
                  if (randomStop) {
                    findRoute(selectedStop, randomStop);
                  }
                }
              }}
              disabled={loading}
            >
              <Text style={styles.routeButtonText}>
                {loading ? 'Finding Route...' : 'Find Route to Random Stop'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#f4511e',
    color: 'white',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  stopsSection: {
    flex: 1,
    padding: 10,
  },
  routesSection: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stopsList: {
    flex: 1,
  },
  routesList: {
    maxHeight: 100,
  },
  stopItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 5,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  selectedStop: {
    backgroundColor: '#f4511e',
  },
  stopName: {
    fontSize: 16,
    fontWeight: '600',
  },
  stopCoords: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  routeItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginRight: 10,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  routeName: {
    fontSize: 14,
    fontWeight: '500',
  },
  routeColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: 8,
  },
  routeButton: {
    backgroundColor: '#f4511e',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  routeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 