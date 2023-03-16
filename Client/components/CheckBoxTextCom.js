import {useState} from 'react';
import {TextInput, View, CheckBox, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const CheckBoxTextCom = ({content, data, setData}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState('');

  setTimeout(() => {
    if ( data && data[content.name] ){
      setIsEnabled(true);
      setText(data[content.name]);
    }
  }, 10);

  const handleOnValueChange = () => {
    setIsEnabled(!isEnabled);
    if (!(!isEnabled)) {
      setData({...data, [content.name]: false});
      setText('');
    }
  }

  const onChangeText = (text) => {
    setData({...data, [content.name]: text});
    setText(text);
  }

  return (
    <View style={styles.container}>
      <CheckBox value = {isEnabled} onValueChange = {handleOnValueChange}/>
      <Text style={styles.text}>{content.display}</Text>
      <TextInput 
        style = {[styles.input, {backgroundColor: isEnabled ? 'white' : 'gray'}]}
        editable = {isEnabled}
        onChangeText = {text => onChangeText(text)}
        value = {text}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  text: {
    marginLeft: 4,
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 20,
    marginLeft: 16,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    borderRadius: 100,
  }
})

export default CheckBoxTextCom;