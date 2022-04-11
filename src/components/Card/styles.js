import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {width, height} from 'react-native-dimension';
import CommonStyles from '../../utills/CommonStyles';
import AppFont from '../../utills/AppFont';

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: height(6),
    backgroundColor: AppColors.white,
    borderRadius: width(6),
    width: width(97),
    elevation: 5,
  },
  image: {
    height: height(19),
    width: width(98),
  },
  image2: {
    height: height(13),
    width: height(13),
    borderRadius: height(20),
    position: 'absolute',
    bottom: height(0),
    left: width(0),
  },
  child: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: height(2),
  },
  ndChild: {
    marginHorizontal: width(5),
    marginBottom: height(3),
  },

  description: {
    marginTop: height(1),
    color: AppColors.gray,
    fontFamily: AppFont.roboto,
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height(1),
    width: width(45),
  },
  text2: {
    marginLeft: width(2),
    fontWeight: 'bold',
    fontFamily: AppFont.roboto,
  },
});
export default styles;
