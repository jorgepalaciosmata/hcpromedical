
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const RadioButtonCom = ({content, data, setData}) => {
  
  const [selectedOption, setSelectedOption] = useState();

  setTimeout(()=>{
    setSelectedOption(data.gender);
  },10)
  
  const updateInfo = (option) => {
    setSelectedOption(option);
    setData( {...data, [content.name]: option} );
  } 

  return (
    <View>
    <Text style={styles.text}>{content.display}:</Text>

    <View style={styles.wrapper}>
      {content.options.map(option => (
        <View key={option} style={styles.option}>
          <TouchableOpacity 
            style={styles.outer}
            onPress={()=>updateInfo(option)} >
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
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems:'center',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
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
  },
  text: {
    marginTop: 5
  }
});
export default RadioButtonCom;