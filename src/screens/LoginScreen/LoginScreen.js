import {Text, View, Image, CheckBox} from 'react-native';
import React, {useState} from 'react';
import {ScreenWrapper} from 'react-native-screen-wrapper';
//import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/AntDesign';
import styles from './Styles';
import Button from '../../components/Button';
import {Input} from '../../components/Input';
import {InputIcon} from '../../components/Input';
import CommonStyles from '../../utills/CommonStyles';
import AppColors from '../../utills/AppColors';
import {width} from 'react-native-dimension';
const LoginScreen = () => {
  const [checkBox, setcheckBox] = useState(true);
  return (
    <ScreenWrapper>
      <View style={styles.main}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require('../../assets/images/Group.png')}
        />
        <View style={styles.child}>
          <Text style={styles.text}>Log In to your Account</Text>
          <View style={styles.eye}>
            <Input
              fieldLable={'Email'}
              title={'Enter Your Email'}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.eye}>
            <InputIcon
              fieldLable={'Password '}
              title={'Enter Your Password'}
              containerStyle={{width: width(75)}}
              // viewCountanerStyle={styles.eye2}
            />
          </View>
          <View style={styles.chd2}>
            <View style={CommonStyles.rowAlignItemCenter}>
              <Icon1
                // style={styles.icon}
                name={checkBox ? 'checkcircleo' : 'checkcircle'}
                size={15}
                color="#D27BE4"
                onPress={() => setcheckBox(!checkBox)}
              />
              <Text style={CommonStyles.marginLeft_1}>Remember me</Text>
            </View>

            <Text style={{color: AppColors.pink}}>Forgot Password?</Text>
          </View>
          <Button title={'Log In'} />
        </View>
        <View style={CommonStyles.marginBottom_1}>
          <Text style={styles.text1}>Don't Have An Account ??</Text>
          <Button
            containerStyle={styles.signupBtn}
            textStyle={styles.btntext}
            // containerStyle={{
            //   width: 100,
            //   backgroundColor: 'black',
            // }}
            title={'Sign Up'}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default LoginScreen;
