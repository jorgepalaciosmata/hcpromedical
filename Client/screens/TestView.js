import React, { useEffect } from 'react';

import CheckBoxCom from '../components/CheckBoxCom'

const GetPersonalInfoScreen = () => {
  const options = ['cancer','diabetes','taquicardia','epilepsia'];
  return (
    <CheckBoxCom options={options}/>
  );
 
};


export default GetPersonalInfoScreen;