import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors/colors';
import { Dimensions } from '../../constants/dimensions/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background.primary,
  },
  image: {
    width: Dimensions.TEXT.xxxxl*4,
    height: Dimensions.TEXT.xxxxl*4,
  },
  text: {
    marginTop: Dimensions.MARGIN.sm, 
    fontSize: Dimensions.TEXT.lg, 
    color: Colors.text.primary,
  },
});

export default styles;
