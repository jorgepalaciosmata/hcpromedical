import React, { useState } from 'react'
import { Button, ScrollView } from 'react-native'

import { useWhatComWillUse } from '../hooks/useWhatComWillUse'
import inputsFromJsonAgain from '../assets/data/jsons/testing.json'
import CheckBoxTextCom from '../components/CheckBoxTextCom'

const TestView = () => {
  const [data, setData] = useState({
    diabetes: true,
    gender: 'Masculino'
  }) 
  const {inputs} = useWhatComWillUse(inputsFromJsonAgain, data, setData);


  return (
    <ScrollView>
      <CheckBoxTextCom textN="otro"></CheckBoxTextCom>
    </ScrollView>
  )
}


export default TestView;