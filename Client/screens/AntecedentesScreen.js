import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import inputsFromJson from '../assets/data/jsons/Antecedentes.json';
import { AntecedentesStyles } from '../assets/styles/Antecedentes.style';
import { ButtonCom } from '../components/ButtonCom';
import { useAntecedentes } from '../hooks/useAntecedentes';
import { useWhatComWillUse } from '../hooks/useWhatComWillUse';

export const AntecedentesScreen = ({ editable = true }) => {
    const { diseases, setDiseases, saveOnDB } = useAntecedentes();
    const { inputs } = useWhatComWillUse(inputsFromJson, diseases, setDiseases);

    return (
            <ScrollView style={AntecedentesStyles.background} pointerEvents={editable ? 'auto' : 'none'}>
                <View style={AntecedentesStyles.header}>
                    <Image  
                        source={require('../assets/icons/antecedentes.png')} 
                        style={AntecedentesStyles.headerImage}
                    />
                    <Text style={AntecedentesStyles.headerText}>Antecedentes</Text>
                </View>

                <View style={AntecedentesStyles.content}>
                    <View style={{marginBottom: 20}}>
                        <Text style={AntecedentesStyles.titleText}>Mis Enfermedades</Text>
                        {inputs.map(input=> (
                            input.render
                            ))}
                    </View>
                    <View style={{alignItems:"center"}}>
                        <ButtonCom text={"Actualizar datos"} onPress={saveOnDB}/>
                    </View>
                </View>
            </ScrollView>      
    )
}
