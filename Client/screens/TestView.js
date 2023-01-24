import React, { useEffect } from 'react';

import CheckBoxCom from '../components/CheckBoxCom'
import inputs from "../assets/data/testing.json"

const TestView = () => {
	return (
  	inputs.map( (input, index) => (
        <CheckBoxCom key={index} options={input.content.options} />
    ))
  );
 
};


export default TestView;