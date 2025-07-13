import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Trip } from '../../../types/gtfs.types';

interface GeneratedGraphsState {
  metroGraph: Record<string, string[]>;
  weightedGraph: Record<string, Record<string, number>>;
  trips: Trip[];
}

const initialState: GeneratedGraphsState = {
  metroGraph: {},
  weightedGraph: {},
  trips: [],
};

const generatedGraphsSlice = createSlice({
  name: 'generatedGraphs',
  initialState,
  reducers: {
    setMetroGraph(state, action: PayloadAction<Record<string, string[]>>) {
      state.metroGraph = action.payload;
    },
    setWeightedGraph(state, action: PayloadAction<Record<string, Record<string, number>>>) {
      state.weightedGraph = action.payload;
    },
    setTrips(state, action: PayloadAction<Trip[]>) {
      state.trips = action.payload;
    },
  },
});

export const { setMetroGraph, setWeightedGraph, setTrips } = generatedGraphsSlice.actions;
export default generatedGraphsSlice.reducer;
