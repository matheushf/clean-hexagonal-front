import React, { createContext, useMemo, useContext } from 'react';
import { FavoriteDogE } from '../../domain/entity';
import { DogE } from '../../domain/entity/dog';
import { useHome } from './homeHook';

type HomeContextT = {
  dogs: DogE[];
  favouriteDogs: FavoriteDogE[];
  savingFavoriteId: string;
  onStar: (dog: DogE) => Promise<void>;
};

const HomeContext = createContext({} as HomeContextT);
export const useHomeContext = () => useContext(HomeContext);

export function HomeContextProvider({ children }: { children: React.ReactNode }) {
  const homeHookData = useHome();
  const providerValue = useMemo(() => homeHookData, [homeHookData]);

  return <HomeContext.Provider value={providerValue}>{children}</HomeContext.Provider>;
}
