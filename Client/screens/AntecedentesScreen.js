import React from 'react'
import { Button, ScrollView, View, Text, Image } from 'react-native'
import inputsFromJson from '../assets/data/jsons/Antecedentes.json'
import { AntecedentesStyles } from '../assets/styles/Antecedentes.style'
import { ButtonCom } from '../components/ButtonCom'
import { useAntecedentes } from '../hooks/useAntecedentes'
import { useWhatComWillUse } from '../hooks/useWhatComWillUse'

export const diseasesContext = React.createContext();

export const AntecedentesScreen = () => {
    const { inputs } = useWhatComWillUse(inputsFromJson);
    const { diseases, updateDiseases, saveOnDB } = useAntecedentes();

    return (
        <diseasesContext.Provider value={ {diseases, updateDiseases} } >
            <ScrollView style={AntecedentesStyles.background}>
                <View style={AntecedentesStyles.header}>
                    <Image  
                        source={require('../assets/icons/antecedentes.png')} 
                        style={AntecedentesStyles.headerImage}
                    />
                    <Text style={AntecedentesStyles.headerText}>Antecedentes</Text>
                </View>

                <View style={AntecedentesStyles.content}>
                    <View>
                    <Text style={AntecedentesStyles.titleText}>Mis Enfermedades</Text>
                    {/* no se como decirle que se carge en mis datos o en otros datos */}
                    {inputs.map(input=> (
                        input.render
                        ))}
                    </View>
                        
                    <ButtonCom text={"Actualizar datos"} onPress={saveOnDB} />
                </View>
            
            </ScrollView>
        </diseasesContext.Provider>
        
    )
}
