import {Text, View, TextInput} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const TextBoxCom = ({content, data, setData}) => {

  function getValue(id) {
    if (id && data) {
      return data[id] ? data[id] : '';
    }   
    return '';
  } 

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.placeholder}>{content.placeholder}</Text>
        <TextInput
          inputMode = {content.inputMode}
          defaultValue = {getValue(content.id)}
          onChangeText = {( value ) => setData({...data, [content.id]: value })}
          placeholder = {content.placeholder}
          style={styles.textInput}
          placeholderTextColor='#b2afaf'
        />
      </View>
    </>
  )
};

const styles = EStyleSheet.create({
  container: {
    border: '1px solid #ffe5e5',
    marginBottom: '10px',
    padding: '5px',
    borderRadius: 5,
    width: '100%',
    maxWidth: '350px'
  },
  textInput: {
    width: '100%',
    maxWidth: '340px',
    padding: '5px'
  },  
  placeholder: {
    fontSize: '10px',
    fontWeight: 'bold',
    color: '#fc2954'
  }
})

export default TextBoxCom;