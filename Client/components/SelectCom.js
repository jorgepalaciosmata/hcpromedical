import React, { useState } from 'react';
import { Picker, Text, View } from 'react-native';


const SelectCom = ({options}) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);

  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: 200}}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedValue(itemValue)
        }
      >
        {options.map((option, index) => (
          <Picker.Item label={option} value={option} key={index} />
        ))}
      </Picker>
    </View>
  );
};

export default SelectCom;