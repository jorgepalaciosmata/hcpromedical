import React, { useState } from 'react'
import { View, StyleSheet, Modal, TextInput, TouchableOpacity, Text } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker';
import { ButtonCom } from './ButtonCom';

export const CalendarCom = ( data, setData ) => {
    const [showModal, setShowModal] = useState(false)
    const [date, setDate] = useState('Boton');


    const onDateChange = ( date ) => {
        console.log(date)
        setDate(`${date._i.day} - ${date._i.month + 1} - ${date._i.year}`);
    }

  return (
    <View>
        <TouchableOpacity style={styles.button} onPress={()=> setShowModal(true)}>
            <TextInput editable={ false } value={date} style={styles.textInput}/>
        </TouchableOpacity> 

        <Modal visible={ showModal }>
            <CalendarPicker onDateChange={ onDateChange } />
            <ButtonCom text={"aceptar"} onPress={ () => setShowModal(false) }/>
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
          height: 40,
          marginLeft: 16,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 8,
          backgroundColor: 'white'
    }
});