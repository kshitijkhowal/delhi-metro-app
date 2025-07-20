import { RecentRoute } from '@/app/redux/features/recentRoutes/recentRoutes';

export function useSuggestionListItemLogic(route: RecentRoute) {
  return {
    fromName: route.from.stop_name,
    toName: route.to.stop_name,
  };
}
