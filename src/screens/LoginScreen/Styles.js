import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {height, width} from 'react-native-dimension';
import AppFont from '../../utills/AppFont';

const styles = StyleSheet.create({
  main: {
    height: height(100),
    width: width(100),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: AppColors.white,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width(40),
    height: height(10),
  },
  text: {
    marginBottom: height(4),
    fontSize: width(5),
    textAlign: 'center',
    color: AppColors.black,
    fontFamily: AppFont.roboto,
  },

  eye: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: height(2),
    paddingBottom: height(1),
    borderRadius: width(3),
    backgroundColor: AppColors.lightGray,
    height: height(8),
    width: width(90),
    paddingHorizontal: width(4),
    marginBottom: height(3),
    fontFamily: AppFont.roboto,
  },

  passwordIcon: {
    position: 'relative',
  },

  text1: {
    marginTop: height(2),
    textAlign: 'center',
    width: width(80),
    color: AppColors.black,
    fontFamily: AppFont.roboto,
  },
  chd2: {
    display: 'flex',
    marginBottom: height(4),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: width(3),
  },
  signupBtn: {
    margin: height(2),
    backgroundColor: AppColors.lightGray,
  },
  btntext: {
    color: AppColors.black,
    fontFamily: AppFont.roboto,
  },
});
export default styles;
