import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../constants/colors/colors';

export function useHeaderComponentLogic({
  theme = 'white',
}: {
  actions?: { onLeftPress?: () => void };
  theme?: 'white' | 'primary';
  LeftIcon?: React.ComponentType;
}) {
  const navigation = useNavigation();
  const isPrimary = theme === 'primary';
  const backgroundColor = isPrimary ? Colors.theme.primary.default : Colors.background.primary;
  const titleColor = isPrimary ? Colors.text.inverse : Colors.text.primary;
  const subTitleColor = isPrimary ? Colors.text.inverse : Colors.text.secondary;

  const handleOnBack = () => {
    navigation.goBack();
  };

  return {
    isPrimary,
    backgroundColor,
    titleColor,
    subTitleColor,
    handleOnBack,
  };
}
