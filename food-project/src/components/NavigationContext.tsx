// NavigationContext.tsx
import React, { createContext, useContext } from 'react';

interface NavigationContextType {
  basename: string;
}

export const NavigationContext = createContext<NavigationContextType>({
  basename: '',
});

export const NavigationProvider: React.FC<NavigationContextType> = ({  basename }) => {
  return (
    <NavigationContext.Provider value={{ basename }}>
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  return useContext(NavigationContext);
};
