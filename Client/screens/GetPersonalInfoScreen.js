import React, { useEffect } from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';
const axios = require('axios').default;


const GetPersonalInfoScreen = () => {

  const [person, setPerson] = useState({
    id: ''
  });
  const [isInit, setIsInit] = useState(false);

  async function getData () {
    await axios.get('https://p8ada5o8e0.execute-api.us-east-1.amazonaws.com/Prod/personalInfo/50')
   .then(function (response) {
    setIsInit(true);
    setPerson(person => ( 
      {
        id: response.data.item.id
      }
    )); 
   })
   .catch(function (error) {
     // handle error
     console.log(error);
   })
   .then(function () {
     // always executed
     console.log(person);
   });
  }

  useEffect(() => {
    if (!isInit) {
      getData();
    }
  }, [person]);
  
  return (  
    <View>
      <div>ID: {person.id}</div>
    </View> )
 
};

export default GetPersonalInfoScreen;