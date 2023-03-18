import { useState } from 'react';
import {View, Modal, TextInput, TouchableOpacity, Text} from 'react-native'
import CalendarPicker from 'react-native-calendar-picker';
import {ButtonCom} from './ButtonCom';
import EStyleSheet from 'react-native-extended-stylesheet';

export const CalendarCom = ({content, data, setData}) => {
    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState('10 - 2 - 2003');

    setTimeout(() => {
        if ( data[content.name] )
        setDate(data[content.name])
      }, 10);

    const onDateChange = ( date ) => {
        setDate(`${date._i.day}/${date._i.month + 1}/${date._i.year}`);
        setData({...data,[content.name]: `${date._i.day}/${date._i.month + 1}/${date._i.year}`});
    }

  return (
    <View style={styles.container}>
        <Text style={styles.placeholder}>{content.name}</Text>
        <TouchableOpacity  onPress = {() => setShowModal(true)}>
            <TextInput editable = { false } value = {date} style = {styles.textInput}/>
        </TouchableOpacity> 

        <Modal visible = { showModal }>
            <CalendarPicker onDateChange = { onDateChange } />
            <View style = {styles.buttonContainer}>
                <ButtonCom text = {"regresar"} onPress={ () => setShowModal(false) }/>
                <ButtonCom text = {"aceptar"} onPress={ () => setShowModal(false) }/>
            </View>
        </Modal>
    </View>
  )
}

const styles = EStyleSheet.create({
    container: {
        border: '1px solid #ffe5e5',
        marginBottom: '10px',
        padding: '5px',
        borderRadius: 5,
        width: '100%',
        maxWidth: '350px'
    },
    placeholder: {
        fontSize: '10px',
        fontWeight: 'bold',
        color: '#fc2954'
    },
    button: {
        color: 'white',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        flex: 1,
    },
    textInput: {
        flex: 1,
        padding: 0,
        marginTop: 5,
        marginBottom: 2,
        borderRadius: 5,
    },
    buttonContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:'row',
        gap: 10,
        alignSelf: 'center'
    }
});