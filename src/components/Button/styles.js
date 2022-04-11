import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {width, height} from 'react-native-dimension';
import AppFont from '../../utills/AppFont';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(5),
    backgroundColor: AppColors.pink,
    height: height(7),
    width: width(70),
    alignSelf: 'center',
  },
  text: {
    color: AppColors.white,
    fontSize: width(4),
    fontFamily: AppFont.roboto,
  },
});
export default styles;
