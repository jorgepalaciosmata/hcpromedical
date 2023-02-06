import React, { useState } from 'react';
import { Switch, TextInput, View } from 'react-native';

const CheckBoxTextCom = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState('');

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4' }
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsEnabled(previousState => !previousState)}
        value={isEnabled}
      />
      <TextInput
        style={{
          flex: 1,
          height: 40,
          marginLeft: 16,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 8,
          backgroundColor: isEnabled ? 'white' : 'gray'
        }}
        editable={isEnabled}
        onChangeText={text => setText(text)}
        value={text}
      />
    </View>
  );
};

export default CheckBoxTextCom;