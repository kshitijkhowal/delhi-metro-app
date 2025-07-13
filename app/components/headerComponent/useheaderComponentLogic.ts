import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../constants/colors/colors';
import BackArrowIcon from '@/app/assets/icons/arrowIcons/backArrowIcon';

export function useHeaderComponentLogic({
  actions,
  transparent,
  theme = 'white',
  LeftIcon,
}: {
  actions?: { onLeftPress?: () => void };
  transparent?: boolean;
  theme?: 'white' | 'primary';
  LeftIcon?: React.ComponentType;
}) {
  const navigation = useNavigation();
  const isPrimary = theme === 'primary';
  const backgroundColor = transparent
    ? 'transparent'
    : isPrimary
    ? Colors.theme.primary.default
    : Colors.background.primary;
  const titleColor = isPrimary ? Colors.text.inverse : Colors.text.primary;
  const subTitleColor = isPrimary ? Colors.text.inverse : Colors.text.secondary;
  // Replace with your actual icon imports

  const handleOnBack = () => {
    if (actions?.onLeftPress) {
      actions.onLeftPress();
    } else {
      navigation.goBack();
    }
  };

  return {
    isPrimary,
    backgroundColor,
    titleColor,
    subTitleColor,
    handleOnBack,
  };
}
