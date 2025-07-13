import { useEffect } from 'react';

export function useScreenWrapperLogic(screenName?: string) {
  useEffect(() => {
    if (screenName) {
      // You can add analytics or logging here
      console.log(`Screen: ${screenName}`);
    }
  }, [screenName]);
}
