import { Colors } from '@/app/constants/betterColors/betterColors';

export const createThemeStyles = (theme: 'light' | 'dark') => {
  const colors = Colors[theme];
  
  return {
    container: {
      backgroundColor: colors.background.primary,
      padding: 16,
    },
    text: {
      color: colors.text.primary,
      fontSize: 16,
    },
    button: {
      backgroundColor: colors.theme.primary,
      borderColor: colors.border.primary,
    },
    // Add more styles as needed
  };
};

// Usage in components:
// const styles = createThemeStyles(theme);
// <View style={styles.container}> 