import {useState, useEffect, useCallback, useRef} from 'react';
import {getActiveRouteName} from '../services/navigationService';

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';
/**
 * Custom hook for persisting navigation state.
 */

export default function useNavigationPersistence(Storage) {
  const [initialNavigationState, setInitialNavigationState] = useState();
  const [isRestoringNavigationState, setIsRestoringNavigationState] = useState(
    true,
  );

  const routeNameRef = useRef();

  const onNavigationStateChange = (state) => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = getActiveRouteName(state);

    if (previousRouteName !== currentRouteName) {
      // track screens.
      __DEV__ && console.log(currentRouteName);
    }

    // Save the current route name for later comparision
    routeNameRef.current = currentRouteName;

    // Persist state to storage
    // storage.save(NAVIGATION_PERSISTENCE_KEY, state);
  };

  const restoreState = useCallback(async () => {
    try {
      const state = await Storage.load(NAVIGATION_PERSISTENCE_KEY);
      if (state) {
        setInitialNavigationState(state);
      }
    } finally {
      setIsRestoringNavigationState(false);
    }
  }, [Storage]);

  useEffect(() => {
    if (isRestoringNavigationState) {
      restoreState();
    }
  }, [isRestoringNavigationState, restoreState]);

  return {onNavigationStateChange, restoreState, initialNavigationState};
}
