# AppButton Component

A customizable, animated, and accessible button for React Native apps with full theme support.

## Features
- **Theme-Aware**: Automatically adapts to light and dark themes
- **Animated elevation**: Shadow and scale animations on press
- **Theme-aware shadows**: Shadows automatically adapt to light/dark themes
- **Button colors**: Black buttons for light theme, white buttons for dark theme
- **Optional haptic feedback** on press using Expo Haptics
- **Supports loading state** with customizable loading text
- **Customizable styles** and text
- **Can render custom children** (e.g., icons)

## Theme Support

The AppButton automatically adapts to your app's theme:

### Light Theme
- **Primary Button**: Black background (`#000000`)
- **Secondary Button**: White background with black border
- **Shadows**: Dark shadows for depth

### Dark Theme  
- **Primary Button**: White background (`#FFFFFF`)
- **Secondary Button**: Dark background with white border
- **Shadows**: Light shadows for visibility

## Usage

```tsx
import AppButton from '@/app/components/AppButton';

<AppButton
  title="Submit"
  onPress={handleSubmit}
  type="primary" // or "secondary"
  loading={isLoading}
  elevation={{
    enabled: true,
    shadowX: 2,
    shadowY: 2,
    shadowBlur: 2,
    shadowSpread: 1,
    shadowAlpha: 0.15,
    duration: 250,
    scale: 0.98,
    shadowColor: 'primary', // 'primary', 'secondary', or 'tertiary'
  }}
  haptic={{ enabled: true, type: 'light' }}
  style={{ marginTop: 16 }}
  textStyle={{ fontSize: 16 }}
/>
```

## Props

| Prop         | Type                                   | Description                                                      |
|--------------|----------------------------------------|------------------------------------------------------------------|
| `title`      | `string`                               | Button text                                                      |
| `onPress`    | `() => void`                           | Press handler                                                    |
| `disabled`   | `boolean`                              | Disable the button                                               |
| `style`      | `ViewStyle`                            | Custom button style                                              |
| `textStyle`  | `object`                               | Custom text style                                                |
| `type`       | `'primary' \| 'secondary'`             | Button style type                                                |
| `loading`    | `boolean`                              | Show loading spinner                                             |
| `loadingText`| `string`                               | Text to show while loading                                       |
| `elevation`  | `ElevationConfig`                      | Elevation/shadow/scale animation config (see below)              |
| `haptic`     | `{ enabled: boolean, type?: HapticType }` | Haptic feedback config (see below)                               |
| `children`   | `React.ReactNode`                      | Custom content (e.g., icon). If provided, replaces text.         |

## ElevationConfig

```ts
interface ElevationConfig {
  enabled: boolean;
  shadowX?: number;
  shadowY?: number;
  shadowBlur?: number;
  shadowSpread?: number;
  shadowAlpha?: number;
  duration?: number;
  scale?: number;
  shadowColor?: 'primary' | 'secondary' | 'tertiary'; // Theme-aware shadow color
  haptic?: {
    enabled: boolean;
    type?: HapticType;
  };
}
```

### Shadow Colors
- `primary`: Strongest shadow intensity
- `secondary`: Medium shadow intensity  
- `tertiary`: Subtle shadow intensity

Shadows automatically adapt to your theme:
- **Light theme**: Dark shadows (black with opacity)
- **Dark theme**: Light shadows (white with opacity)

## Haptic Feedback
The component uses Expo Haptics for haptic feedback. You can configure haptics in two ways:

### 1. Standalone haptic prop:
```tsx
<AppButton
  title="Press Me"
  haptic={{ enabled: true, type: 'light' }}
  onPress={handlePress}
/>
```

### 2. Within elevation config:
```tsx
<AppButton
  title="Press Me"
  elevation={{
    enabled: true,
    haptic: { enabled: true, type: 'success' }
  }}
  onPress={handlePress}
/>
```

### Available Haptic Types:
- **Impact Feedback**: `'light'`, `'medium'`, `'heavy'`, `'soft'`, `'rigid'`
- **Notification Feedback**: `'success'`, `'warning'`, `'error'`

## Custom Content
- If you pass `children`, the button will render them instead of the text. Useful for icon-only buttons:

```tsx
<AppButton onPress={...}>
  <Icon name="plus" />
</AppButton>
```

## Example: Theme-Aware Button with Elevation
```tsx
<AppButton
  title="Submit Form"
  onPress={handleSubmit}
  elevation={{
    enabled: true,
    shadowX: 3,
    shadowY: 3,
    shadowBlur: 6,
    shadowSpread: 0,
    shadowAlpha: 0.3,
    duration: 200,
    scale: 0.95,
    shadowColor: 'primary', // Automatically adapts to theme
    haptic: { enabled: true, type: 'success' }
  }}
  type="primary"
/>
```

## Example: Secondary Button
```tsx
<AppButton
  title="Cancel"
  onPress={handleCancel}
  type="secondary"
  elevation={{
    enabled: true,
    shadowColor: 'secondary', // Lighter shadow
  }}
/>
```

## Accessibility
- The button uses a `Pressable` for accessibility and keyboard support.
- You can pass additional accessibility props as needed.
- Theme-aware colors ensure proper contrast ratios.

---

For more advanced usage, see the source code and prop types in `AppButton.tsx` and `useAppButtonLogic.ts`.