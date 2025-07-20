export const BUILD_TYPES = [
  { name: 'Debug - Development build with dev client', value: 'development' },
  { name: 'Preview - Internal testing build', value: 'preview' },
  { name: 'Production - App store ready build', value: 'production' },
  { name: 'Submit - Submit to app stores', value: 'submit' }
];

export const PLATFORMS = [
  { name: 'Android', value: 'android' },
  { name: 'iOS', value: 'ios' },
  { name: 'All Platforms', value: 'all' }
];

export function buildCommand(buildType, platform) {
  if (buildType === 'submit') {
    return `eas submit --platform ${platform}`;
  } else if (buildType === 'development') {
    return `expo run:${platform}`;
  } else {
    return `eas build --profile ${buildType} --platform ${platform}`;
  }
}

export function getBuildTypeName(buildTypeValue) {
  return BUILD_TYPES.find(bt => bt.value === buildTypeValue)?.name.split(' - ')[0] || buildTypeValue;
}

export function getPlatformName(platformValue) {
  return PLATFORMS.find(p => p.value === platformValue)?.name || platformValue;
} 