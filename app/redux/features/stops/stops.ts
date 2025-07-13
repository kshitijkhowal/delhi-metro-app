import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Stop } from '../../../types/gtfs.types';

interface StopsState {
  stops: Stop[];
}

const initialState: StopsState = {
  stops: [],
};

const stopsSlice = createSlice({
  name: 'stops',
  initialState,
  reducers: {
    setStops(state, action: PayloadAction<Stop[]>) {
      state.stops = action.payload;
    },
  },
});

export const { setStops } = stopsSlice.actions;
export default stopsSlice.reducer;
