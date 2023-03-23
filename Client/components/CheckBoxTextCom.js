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
      <View style={styles.check}>
        <CheckBox value = {isEnabled} onValueChange = {handleOnValueChange}/>
        <Text style={styles.text}>{content.display}</Text>
      </View>
      <TextInput 
        style = {[styles.input, {backgroundColor: isEnabled ? 'white' : '#CCC'}]}
        editable = {isEnabled}
        onChangeText = {text => onChangeText(text)}
        value = {text}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  check: {
    flexDirection: 'row',
    marginBottom: '10px'
  },
  container: {
    flexDirection: 'column', 
    alignItems: 'left',
    border: '1px solid #ffe5e5',
    padding: '5px',
    borderRadius: 5,
    width: '100%',
    maxWidth: '350px',
    marginBottom: '10px'
  },
  text: {
    marginLeft: 4,
    fontSize: '10px',
    fontWeight: 'bold',
    color: '#fc2954'
  },
  input: {
    flex: 1,
    padding: '5px',
    border: '1px solid #ffe5e5',
    width: '100%',
    maxWidth: '330px'
  }
})

export default CheckBoxTextCom;