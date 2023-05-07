import {
  useContext,
  createContext,
  useMemo,
  useSyncExternalStore,
  useCallback,
} from 'react';

const MobileContext = createContext();

function useMediaQuery(query) {
  const subscribe = useCallback(
    (callback) => {
      const matchMedia = window.matchMedia(query);

      matchMedia.addEventListener('change', callback);
      return () => {
        matchMedia.removeEventListener('change', callback);
      };
    },
    [query]
  );

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => {
    throw Error('useMediaQuery is a client-only hook');
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useMobile() {
  return useContext(MobileContext);
}

export function MobileProvider({ children }) {
  const isMobile = useMediaQuery('only screen and (max-width : 640px)');
  const isTablet = useMediaQuery(
    'only screen and (min-width : 641px) and (max-width : 960px)'
  );
  const isDesktop = useMediaQuery(
    'only screen and (min-width : 961px) and (max-width : 1366px)'
  );
  const isLargeDesktop = useMediaQuery('only screen and (min-width: 1367px)');

  const value = useMemo(() => ({
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  }));

  return (
    <MobileContext.Provider value={value}>{children}</MobileContext.Provider>
  );
}
