
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const RadioButtonCom = ({content}) => {
  const [selectedOption, setSelectedOption] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content.display}</Text>

      <View style={styles.wrapper}>
        {content.options.map(option => (
        <View key={option} style={styles.option}>
          <TouchableOpacity 
            style={styles.outer}
            onPress={()=>setSelectedOption(option)} >
            { selectedOption === option && <View style={styles.inner}></View>}
          </TouchableOpacity> 
          <Text>{option}</Text>
        </View>
      ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },
  text: {
    fontSize:20,
    fontWeight: '700',
  },
  outer: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems:'center',
    marginRight: 10,
    marginLeft: 10
  },
  inner: {
    width: 15,
    height: 15,
    backgroundColor: 'gray',
    borderRadius: 10
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  option: {
    flexWrap:'wrap', 
    alignItems: 'left', 
    flexDirection: "row",
    alignItems: 'center'
  }
});
export default RadioButtonCom;