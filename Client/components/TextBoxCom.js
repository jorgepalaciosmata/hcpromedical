import React, {useContext, useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import { dataContext } from '../screens/PersonalInfoScreen';

const TextBoxCom = ({content, data, setData}) => {
  // const {data, saveDataFromInput} = useContext(dataContext);
  return (
    <>
      <View style={styles.inputStyle}>
        <Text>{content.placeholder + ':'}</Text>
        <TextInput
          inputMode={content.inputMode}
          defaultValue={data[content.handleChangeText]}
          onChangeText={( value ) => setData({...data, lastName: value })}
        />
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  inputStyle: {
      flex: 1,
      padding: 0,
      marginTop: 5,
      marginBottom: 2,
      borderRadius: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
  },
  inputMode: {
    marginTop: 5
  }
})

export default TextBoxCom;