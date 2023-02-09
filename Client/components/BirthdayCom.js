import React from 'react'
import { Text, View } from 'react-native'
import SelectCom from './SelectCom'

export const BirthdayCom = ({text}) => {

    let days = [];
    const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septimebre','Octubre','Noviembre','Diciembre'];
    let years = [];

    for( let i=1; i<32; i++) {
        days.push(i);
    }
    for( let i=2024; i>1900; i--) {
        years.push(i);
    }
    return (
        <View>
            <Text>{text}</Text>
            <SelectCom options={days}/>
            <SelectCom options={months}/>
            <SelectCom options={years}/>
        </View>
    )
}
