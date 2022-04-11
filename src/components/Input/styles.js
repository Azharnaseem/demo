import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {width, height} from 'react-native-dimension';
import AppFont from '../../utills/AppFont';

const styles = StyleSheet.create({
  in: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    // justifyContent: 'center',
    // paddingTop: height(2),
    // paddingBottom: height(1),
    // borderRadius: width(3),
    // backgroundColor: AppColors.lightGray,
    // height: height(8),
    // width: width(90),
    // paddingHorizontal: width(3),
    // marginBottom: height(4),
    // fontFamily: AppFont.roboto,
  },
});
export default styles;
