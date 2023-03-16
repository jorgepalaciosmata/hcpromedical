import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Hr = () => {
  return (
    <View style = {styles.hr}/>
  )
}

const styles = EStyleSheet.create({
  hr: {
    borderBottomWidth: EStyleSheet.hairlineWidth,
    borderColor: 'black',
    borderStyle:'solid', 
    marginBottom: 10,
    resizeMode: 'contain'
  }
});