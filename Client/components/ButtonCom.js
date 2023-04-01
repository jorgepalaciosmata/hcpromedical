import {TouchableOpacity, View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const ButtonCom = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress = {onPress}>
        <View style = {styles.container}>        
            <Text style = {styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = EStyleSheet.create({
    container: {
        height: 40,
        width: 250,
        borderRadius: 100,
        backgroundColor: '$mainColor',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
    }
})
