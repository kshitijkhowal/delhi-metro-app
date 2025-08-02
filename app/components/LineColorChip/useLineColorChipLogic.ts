import { metroLineColorsMap } from '../../constants/betterColors/betterColors';

function hexToRgba(hex: string, alpha = 0.12) {
  let color = hex.replace('#', '');
  if (color.length === 3) {
    color = color.split('').map((c) => c + c).join('');
  }
  const num = parseInt(color, 16);
  const r = (num >> 16) & 0xff;
  const g = (num >> 8) & 0xff;
  const b = num & 0xff;
  return `rgba(${r},${g},${b},${alpha})`;
}

export function useLineColorChipLogic(line: keyof typeof metroLineColorsMap) {
  const lineData = metroLineColorsMap[line];
  const borderColor = lineData?.color || '#ccc';
  const backgroundColor = lineData ? hexToRgba(lineData.color, 0.12) : '#f5f5f5';
  const displayName = lineData?.displayName || line;
  return { borderColor, backgroundColor, displayName };
}
