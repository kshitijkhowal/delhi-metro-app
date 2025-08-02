# AppTextInput Component

A theme-aware text input component with animated floating labels that automatically adapts to light and dark themes based on Redux configuration.

## Features

- **Animated Floating Labels**: Placeholder text animates up and into the border line when focused or has content
- **Theme Awareness**: Automatically switches between light and dark themes based on Redux `uiPreferences.theme`
- **Dynamic Colors**: All colors (background, text, border, placeholder, label) adapt to the current theme
- **Smooth Animations**: 200ms duration animations for label position, size, and color changes
- **Focus States**: Visual feedback when the input is focused with animated border color
- **Error Handling**: Displays error messages with appropriate styling
- **Accessibility**: Proper contrast ratios and touch targets in both themes

## Animation Details

The floating label animation includes:
- **Position**: Moves from center (16px from top) to top border (8px from top)
- **Size**: Scales from 16px to 12px font size
- **Color**: Transitions from placeholder color to theme primary color
- **Border**: Animated border color change on focus
- **Duration**: 200ms smooth transitions

## Usage

```tsx
import AppTextInput from '@/app/components/AppTextInput';

// Basic usage with floating label
<AppTextInput
  placeholder="Enter your name"
  value={name}
  onChangeText={setName}
/>

// With error handling
<AppTextInput
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  error="Please enter a valid email"
/>

// Password input
<AppTextInput
  placeholder="Enter your password"
  value={password}
  onChangeText={setPassword}
  secureTextEntry
  error={password.length < 6 ? "Password too short" : undefined}
/>
```

## Theme Integration

The component automatically uses the theme from Redux store:
- **Light Theme**: White background, dark text, light borders
- **Dark Theme**: Dark background, light text, light borders

### Theme Colors

The component uses the following color scheme for each theme:

#### Light Theme
- Background: `#ffffff`
- Text: `#000000`
- Border: `rgba(0, 0, 0, 0.12)`
- Placeholder: `#bbbbbb`
- Floating Label: `#473391` (theme primary)
- Error: `#FF6461`

#### Dark Theme
- Background: `#121212`
- Text: `#ffffff`
- Border: `rgba(255, 255, 255, 0.12)`
- Placeholder: `#888888`
- Floating Label: `#473391` (theme primary)
- Error: `#FF6461`

## Props

Extends React Native's `TextInputProps` with additional properties:

| Prop | Type | Description |
|------|------|-------------|
| `error` | `string` | Error message to display below the input |
| `placeholder` | `string` | Text that animates to floating label |
| `value` | `string` | Current input value |
| `...TextInputProps` | - | All standard TextInput props |

## Animation States

1. **Empty & Unfocused**: Placeholder text is centered in the input
2. **Empty & Focused**: Placeholder animates up and becomes the floating label
3. **Has Content**: Floating label remains visible regardless of focus state
4. **Error State**: Error message appears below with theme-appropriate styling

## Dependencies

- Redux store with `uiPreferences` slice
- `useThemeColors` hook for theme-aware colors
- React Native Animated API
- React Native core components

## Testing

You can test the animated floating labels in the TestScreen by:
1. Navigating to the TestScreen
2. Using the "Toggle Theme" button to switch themes
3. Tapping on input fields to see the floating label animation
4. Typing text to see how the label behaves with content
5. Testing error states with validation

## Performance

- Uses `useNativeDriver: false` for layout animations
- Optimized with `useRef` for animation values
- Minimal re-renders with proper dependency arrays 