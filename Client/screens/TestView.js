import React from 'react'
import { Button } from 'react-native'

import inputsFromJson from '../assets/data/jsons/Antecedentes.json'
import { useWhatComWillUse } from '../hooks/useWhatComWillUse'

const Componente = ({onClick}) => {
  return (
    <>
     <Button onPress={() => onClick("hiram")} ></Button>
    </>
    );
}

const TestView = () => {
  const {inputs} = useWhatComWillUse(inputsFromJson);

  const saludoConNombre = (nombre)=>{
    console.log(`Hola ${nombre}`);
  }

  const saludo = (nombre) => {
    saludoConNombre(nombre);
  }

  return (
    <>
    <Componente onClick={saludo}></Componente>
    <br></br>
    <Componente onClick={saludo}></Componente>
    <Componente onClick={saludo}></Componente>
    <Componente onClick={saludo}></Componente>
    </>
  )
}


export default TestView;