import React from 'react'

import inputsFromJson from '../assets/data/jsons/Antecedentes.json'
import { useWhatComWillUse } from '../hooks/useWhatComWillUse'

const TestView = () => {
  const {inputs} = useWhatComWillUse(inputsFromJson);
  return (
    inputs.map(input=> (
       input.render
    ))
  )
}


export default TestView;