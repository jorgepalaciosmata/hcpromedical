import React, {useState, useContext} from 'react';
import {View, CheckBox, Text, StyleSheet} from 'react-native';
import { dataContext } from '../screens/TestView';

const CheckBoxCom = ({content} ) => {
  const saveDataFromInput = useContext(dataContext);

  const [isSelected, setSelection] = useState(false);

  const loadInfo = () => {
    saveDataFromInput( [content.name], isSelected );
  }
  
  const setData = () => {
    setSelection(!isSelected)
    saveDataFromInput( [content.name], !isSelected );
  }

  return (
    <View style={styles.container}>
      <CheckBox
        value={isSelected}
        onValueChange={setData}
      />
      <Text>{content.display}</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap:'wrap',
    alignItems: 'left',
    flexDirection: "row"
  }
})
export default CheckBoxCom;