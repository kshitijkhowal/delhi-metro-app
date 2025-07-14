import { RouteListScreenParams } from '../screens/RouteListScreen/types';
import { StationPickerScreenParams } from '../screens/StationPickerScreen/types';

export type RootStackParamList = {
  SplashScreen: undefined;
  DashboardScreen: undefined;
  StationSelectionScreen: undefined;
  StationPickerScreen: StationPickerScreenParams;
  RouteListScreen: RouteListScreenParams;
}; 