import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import type { RootStackParamList } from '../../navigation/types';
import { setMetroGraph, setWeightedGraph } from '../../redux/features/generatedGraphs/generatedGraphs';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import graphGeneration from '../../utils/graphGeneration/graphGeneration';


export function useSplashScreenLogic() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { metroGraph, weightedGraph, trips } = useAppSelector(state => state.generatedGraphs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Object.keys(metroGraph).length || !Object.keys(weightedGraph).length) {
      const generated = graphGeneration();
      const metroGraphObj = Object.fromEntries(
        Array.from(generated.metroGraph.entries()).map(([k, v]) => [k, Array.from(v)])
      );
      const weightedGraphObj = Object.fromEntries(
        Array.from(generated.weightedGraph.entries()).map(([k, v]) => [k, Object.fromEntries(v)])
      );
      dispatch(setMetroGraph(metroGraphObj));
      dispatch(setWeightedGraph(weightedGraphObj));
    }
    setLoading(false);
  }, [metroGraph, weightedGraph, trips, dispatch]);

  useEffect(() => {
    if (!loading) {
      navigation.navigate('DashboardScreen');
    }
  }, [loading])

  return { 
    loading,
  };
}
