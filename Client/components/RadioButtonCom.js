
import React, {useState, useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { dataContext } from '../screens/TestView';

const RadioButtonCom = ({content}) => {
  const [selectedOption, setSelectedOption] = useState();
  const saveDataFromInput = useContext(dataContext);

  const setData = (option) => {
    setSelectedOption(option);
    saveDataFromInput( [content.name], option );
  }

  return (
    <View>
    <Text>{content.display}:</Text>

    <View style={styles.wrapper}>
      {content.options.map(option => (
      <View key={option} style={styles.option}>
        <TouchableOpacity 
          style={styles.outer}
          onPress={()=>setData(option)} >
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
    marginTop: 3
  },
  option: {
    alignItems: 'left', 
    flexDirection: "row",
    alignItems: 'center',
    flexGrow: 1,
  }
});
export default RadioButtonCom;