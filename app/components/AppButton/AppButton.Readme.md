# AppButton Component

A customizable, animated, and accessible button for React Native apps.

## Features
- Animated elevation (shadow) and scale on press
- Optional haptic feedback on press using Expo Haptics
- Supports loading state
- Customizable styles and text
- Can render custom children (e.g., icons)

## Usage

```tsx
import AppButton from '../../theme/AppButton';

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
  haptic?: {
    enabled: boolean;
    type?: HapticType;
  };
}
```
- `enabled`: Enable elevation/scale animation
- `shadowX`, `shadowY`, `shadowBlur`, `shadowSpread`, `shadowAlpha`: Shadow properties
- `duration`: Animation duration (ms)
- `scale`: Scale factor when pressed (default: 0.98)
- `haptic`: Optional haptic feedback configuration within elevation config

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

### Examples:
```tsx
// Light impact feedback
<AppButton haptic={{ enabled: true, type: 'light' }} />

// Success notification feedback
<AppButton haptic={{ enabled: true, type: 'success' }} />

// Error notification feedback
<AppButton haptic={{ enabled: true, type: 'error' }} />

// Heavy impact feedback
<AppButton haptic={{ enabled: true, type: 'heavy' }} />
```

## Custom Content
- If you pass `children`, the button will render them instead of the text. Useful for icon-only buttons:

```tsx
<AppButton onPress={...}>
  <Icon name="plus" />
</AppButton>
```

## Example: Icon Button with Haptics
```tsx
<AppButton
  onPress={...}
  elevation={{ enabled: true }}
  haptic={{ enabled: true, type: 'heavy' }}
>
  <Image source={plusIcon} />
</AppButton>
```

## Example: Button with Elevation and Haptics
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
    haptic: { enabled: true, type: 'success' }
  }}
  type="primary"
/>
```

## Accessibility
- The button uses a `Pressable` for accessibility and keyboard support.
- You can pass additional accessibility props as needed.

---

For more advanced usage, see the source code and prop types in `AppButton.tsx` and `useAppButtonLogic.ts`.