import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import {width} from 'react-native-dimension';

import Icon from 'react-native-vector-icons/Feather';
import CommonStyles from '../../utills/CommonStyles';
import styles from './styles';

export const Input = ({
  title,
  keyboardType,
  secureTextEntry,
  fieldLable,
  left,
  value,
  containerStyle = {},
  textStyle = {},
  viewCountanerStyle,
}) => {
  return (
    <View style={[styles.input, viewCountanerStyle]}>
      <Text style={CommonStyles.marginLeft_1}>{fieldLable}</Text>
      <TextInput
        style={containerStyle}
        placeholder={title}
        label={fieldLable}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
export const InputIcon = ({
  title,
  keyboardType,
  fieldLable,
  containerStyle = {},
  textStyle = {},
  viewCountanerStyle,
}) => {
  const [hidePass, setHidePass] = useState(true);

  return (
    <View>
      <Text style={CommonStyles.marginLeft_1}>{fieldLable}</Text>
      <View style={styles.in}>
        <TextInput
          style={containerStyle}
          placeholder={title}
          label={fieldLable}
          keyboardType={keyboardType}
          secureTextEntry={hidePass}
        />

        <Icon
          style={styles.passwordIcon}
          name={hidePass ? 'eye' : 'eye-off'}
          size={20}
          color="#D27BE4"
          onPress={() => setHidePass(!hidePass)}
        />
      </View>
    </View>
  );
};
