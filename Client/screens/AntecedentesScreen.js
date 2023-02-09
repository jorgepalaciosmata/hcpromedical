import React from 'react'
import { ScrollView } from 'react-native'
import inputsFromJson from '../assets/data/jsons/Antecedentes.json'
import { useWhatComWillUse } from '../hooks/useWhatComWillUse'

export const AntecedentesScreen = () => {
    const { inputs } = useWhatComWillUse(inputsFromJson);
    return (
        <ScrollView>
            {
                inputs.map(input=> (
                    input.render
                ))
            }
        </ScrollView>
    )
}
