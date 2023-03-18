
import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const RadioButtonCom = ({content, data, setData}) => {
  const [selectedOption, setSelectedOption] = useState();

  setTimeout(() => {
    setSelectedOption(data.gender);
  }, 10)
  
  const updateInfo = (option) => {
    setSelectedOption(option);
    setData({...data, [content.name]: option});
  } 

  return (
    <View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>{content.display}</Text>
        {content.options.map(option => (
          <View key = {option} style = {styles.option}>
            <TouchableOpacity 
              style = {styles.outer}
              onPress = {() => updateInfo(option)}
            >
              {selectedOption === option && <View style = {styles.inner}/>}
            </TouchableOpacity> 
            <Text>{option}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  outer: {
    width: 20,
    height: 20,
    border: "1px solid #ffe5e5",
    borderRadius: 15,
    justifyContent: 'center',
    alignItems:'center',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: "#ffe5e5"
  },
  inner: {
    width: 20,
    height: 20,
    backgroundColor: '#fc2954',
    borderRadius: 10
  },
  wrapper: {
    marginTop: 3,
    border: '1px solid #ffe5e5',
    borderRadius: 5,
    width: '350px',
    padding: '5px'
  },
  option: {
    alignItems: 'left', 
    flexDirection: "row",
    alignItems: 'center',
    // flexGrow: 1,
  },
  text: {
    fontSize: '10px',
    fontWeight: 'bold',
    color: '#fc2954'
  }
});

export default RadioButtonCom;