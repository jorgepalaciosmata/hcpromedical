import React, { useState } from 'react'
import { Button, ScrollView } from 'react-native'

import { useWhatComWillUse } from '../hooks/useWhatComWillUse'
import inputsFromJsonAgain from '../assets/data/jsons/testing.json'

const TestView = () => {
  const [data, setData] = useState({
    diabetes: true
  }) 
  const {inputs} = useWhatComWillUse(inputsFromJsonAgain, data, setData);


  return (
    <ScrollView>
    {/* <TextBoxCom content={inputContentExample} data={data} setData={setData} /> */}
    {inputs.map( input => input.render )}

    <Button onPress={()=>console.log(data)}></Button>
    </ScrollView>
  )
}


export default TestView;