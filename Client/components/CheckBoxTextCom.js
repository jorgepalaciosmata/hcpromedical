import React, { useState } from 'react';
import { TextInput, View, CheckBox, Text} from 'react-native';

const CheckBoxTextCom = ({content, data, setData}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState("");

  setTimeout(() => {
    if ( data[content.name] ){
      setIsEnabled(true);
      setText(data[content.name]);
    }
  }, 10);

  const onValueChange = () => {
    setIsEnabled(!isEnabled);
    if (! (!isEnabled) ) {
      setData({...data, [content.name]: false});
      setText("")
    }
  }

  const onChangeText = (text) => {
    setData({...data, [content.name]: text});
    setText(text);
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <CheckBox 
        value={ isEnabled }
        onValueChange={ onValueChange }
      />
      <Text 
      style={{marginLeft: 4,fontWeight: "100",fontSize: 16, color: "#666666",}}
      >
        {content.display}
      </Text>
      <TextInput 
        style={{
          flex: 1,
          height: 20,
          marginLeft: 16,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 8,
          borderRadius: 100,
          backgroundColor: isEnabled ? 'white' : 'gray'
        }}
        editable={isEnabled}
        onChangeText={text => onChangeText(text)}
        value={text}
      />
    </View>
  );
};

export default CheckBoxTextCom;