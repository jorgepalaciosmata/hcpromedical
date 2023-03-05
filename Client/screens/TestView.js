import React, { useState } from 'react'
import { Button, ScrollView } from 'react-native'

import { useWhatComWillUse } from '../hooks/useWhatComWillUse'
import inputsFromJsonAgain from '../assets/data/jsons/testing.json'
import CheckBoxTextCom from '../components/CheckBoxTextCom'
import { MedicalEntry } from '../components/MedicalEntry'
import  { DocumentsViewScreen }  from '../screens/DocumentsViewScreen'

const TestView = () => {

  return (
    <>
      <DocumentsViewScreen></DocumentsViewScreen>
    </>
  )
}


export default TestView;