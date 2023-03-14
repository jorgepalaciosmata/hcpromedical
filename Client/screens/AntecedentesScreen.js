import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import inputsFromJson from '../assets/data/jsons/Antecedentes.json';
import { ButtonCom } from '../components/ButtonCom';
import { useAntecedentes } from '../hooks/useAntecedentes';
import { useWhatComWillUse } from '../hooks/useWhatComWillUse';

export const AntecedentesScreen = ({ editable = true }) => {
    const { diseases, setDiseases, saveOnDB } = useAntecedentes();
    const { inputs } = useWhatComWillUse(inputsFromJson, diseases, setDiseases);

    return (
            <View pointerEvents={editable ? 'auto' : 'none'}>
                <View style={styles.content}>
                    <View style={{marginBottom: 20}}>
                        {inputs.map(input=> (
                            input.render
                            ))}
                    </View>
                    <View style={{alignItems:"center"}}>
                        <ButtonCom text={"Actualizar datos"} onPress={saveOnDB}/>
                    </View>
                </View>
            </View>      
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#FFFFFF',
        paddingLeft: 50,
        paddingRight:50,
        paddingTop:30,
        paddingBottom:30,
    },
    titleText: {
        fontSize:30,
        fontWeight: "700",
        color:"#666666",
        marginBottom:10,
    }
});