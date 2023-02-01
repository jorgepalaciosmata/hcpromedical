import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const TextBoxCom = ({content}) => {
  return (
    <>
      <View style={styles.inputStyle}>
        <Text>{content.placeholder + ':'}</Text>
        <TextInput
          inputMode={content.inputMode}
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