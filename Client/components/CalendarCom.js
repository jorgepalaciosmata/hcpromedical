import React, { useState } from 'react'
import { View, StyleSheet, Modal, TextInput, TouchableOpacity, Text } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker';
import { ButtonCom } from './ButtonCom';

export const CalendarCom = ( {text, data, setData} ) => {
    const [showModal, setShowModal] = useState(false)
    const [date, setDate] = useState('Boton');


    const onDateChange = ( date ) => {
        console.log(date)
        setDate(`${date._i.day} - ${date._i.month + 1} - ${date._i.year}`);
    }

  return (
    <View>
        <Text>{text}</Text>
        <TouchableOpacity  onPress={()=> setShowModal(true)}>
            <TextInput editable={ false } value={date} style={styles.textInput}/>
        </TouchableOpacity> 

        <Modal visible={ showModal }>
            <CalendarPicker onDateChange={ onDateChange } />
            <View style={styles.buttonContainer}>
                <ButtonCom text={"aceptar"} onPress={ () => setShowModal(false) }/>
            </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
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
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
    }
});