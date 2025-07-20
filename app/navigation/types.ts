import { RouteListScreenParams } from '../screens/RouteListScreen/RouteListScreen.Types';
import { StationPickerScreenParams } from '../screens/StationPickerScreen/StationPickerScreen.Types';

export type RootStackParamList = {
  SplashScreen: undefined;
  DashboardScreen: undefined;
  StationSelectionScreen: undefined;
  StationPickerScreen: StationPickerScreenParams;
  RouteListScreen: RouteListScreenParams;
}; 