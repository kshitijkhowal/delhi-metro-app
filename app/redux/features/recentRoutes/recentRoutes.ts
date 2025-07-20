import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Stop } from '../../../types/gtfs.types';

export interface RecentRoute {
  from: Stop;
  to: Stop;
  timestamp: number;
}

interface RecentRoutesState {
  routes: RecentRoute[];
}

const initialState: RecentRoutesState = {
  routes: [],
};

const recentRoutesSlice = createSlice({
  name: 'recentRoutes',
  initialState,
  reducers: {
    addRecentRoute: (state, action: PayloadAction<{ from: Stop; to: Stop }>) => {
      const { from, to } = action.payload;
      // Remove duplicates (including swapped from/to)
      state.routes = state.routes.filter(
        (route) =>
          !(
            (route.from.stop_id === from.stop_id && route.to.stop_id === to.stop_id) ||
            (route.from.stop_id === to.stop_id && route.to.stop_id === from.stop_id)
          )
      );
      // Add new route to the top
      state.routes.unshift({ from, to, timestamp: Date.now() });
      // Limit to 10 recent routes
      if (state.routes.length > 10) state.routes = state.routes.slice(0, 10);
    },
    clearRecentRoutes: (state) => {
      state.routes = [];
    },
  },
});

export const { addRecentRoute, clearRecentRoutes } = recentRoutesSlice.actions;
export default recentRoutesSlice.reducer; 