import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const TextBoxCom = ({content}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputStyle}>
        <Text>{content.placeholder + ':'}</Text>
        <TextInput/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
      padding: 35
  },
  inputStyle: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderRadius: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
  }
})

export default TextBoxCom;