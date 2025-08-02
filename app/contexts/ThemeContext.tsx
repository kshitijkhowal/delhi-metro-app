import { ThemePaletteType } from '@/app/constants/betterColors/betterColors.d';
import { useThemeColors } from '@/app/hooks/useThemeColors';
import React, { createContext, ReactNode, useContext } from 'react';

interface ThemeContextType {
  colors: ThemePaletteType;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colors = useThemeColors();

  return (
    <ThemeContext.Provider value={{ colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Convenience hook that returns just the colors
export const useColors = (): ThemePaletteType => {
  const { colors } = useTheme();
  return colors;
}; 