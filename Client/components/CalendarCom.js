import React, { useState } from 'react'
import { TouchableOpacity, View, StyleSheet, Modal, Text } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker';
import { ButtonCom } from './ButtonCom';

export const CalendarCom = () => {
    const [showModal, setShowModal] = useState(false)
    const [date, setDate] = useState(null)

  return (
    <View>
        <TouchableOpacity style={styles.button} onPress={()=> setShowModal(true)}>
            <Text> Cumpleanios </Text>
            <Text> date </Text>
        </TouchableOpacity>
        <Modal visible={ showModal }>
            <CalendarPicker onDateChange={setDate} />
            <ButtonCom text={"aceptar"} onPress={ ()=>setShowModal(false) }/>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        margin: 40,
        padding: 10,
        width: 200,
        alignItems: 'center',
    }
});