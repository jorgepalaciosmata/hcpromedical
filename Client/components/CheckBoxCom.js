import {useState} from 'react';
import {View, CheckBox, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const CheckBoxCom = ({content, data, setData}) => {

  const [isSelected, setSelection] = useState(false);
  
  setTimeout(() => {
    if ( data && data[content.name])
    setSelection(data[content.name])
  }, 10);

  const updateInfo = () => {
    setSelection(!isSelected);
    setData({...data, [content.name]:!isSelected });
  }

  
  return (
    <View style = {styles.container}>
      <CheckBox
        value = { isSelected }
        onValueChange = { updateInfo }
      />
      <Text style = {styles.text}>{content.display}</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flexWrap:'wrap',
    alignItems: 'left',
    flexDirection: "row",
    marginBottom: '5px'
  },
  text: {
    marginLeft: 4,
    fontSize: 12,
  },
});

export default CheckBoxCom;