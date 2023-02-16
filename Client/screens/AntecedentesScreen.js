import React from 'react'
import { Button, ScrollView, View, Text, Image } from 'react-native'
import inputsFromJson from '../assets/data/jsons/Antecedentes.json'
import { AntecedentesStyles } from '../assets/styles/Antecedentes.style'
import { ButtonCom } from '../components/ButtonCom'
import { useAntecedentes } from '../hooks/useAntecedentes'
import { useWhatComWillUse } from '../hooks/useWhatComWillUse'


export const AntecedentesScreen = () => {
    const { diseases, setDiseases, saveOnDB } = useAntecedentes();
    const { inputs } = useWhatComWillUse(inputsFromJson, diseases, setDiseases);

    //tengo que mandar diseses y updateDiseases en el componente
    /*
        Para eso voy a trabajar en useWhatComWillUse, un textbox, un checkbox, un radio tienen el mismo objetivo.
        Un componente siempre recibe la data (que desea cargar en caso de necesitarse) y recibe la funcion para guardar los datos.
        Por tanto a useWhatComWillUse se va a hacer cargo de esto....
    */

    return (
            <ScrollView style={AntecedentesStyles.background}>
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
                        {/* no se como decirle que se carge en mis datos o en otros datos */}
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
