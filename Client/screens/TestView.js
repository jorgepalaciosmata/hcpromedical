import React from 'react';
import { Text } from 'react-native';

import CheckBoxCom from '../components/CheckBoxCom';
import TextBoxCom from '../components/TextBoxCom';


import inputs from "../assets/data/testing.json"

const TestView = () => {
	return (
  	inputs.map( (input, index) => (
			(input.inputType == "checkbox") ?
      <CheckBoxCom key={index} options={input.content.options} instructions={input.content.instructions}/>
		 	:
			<TextBoxCom  key={index} content={input.content}/>
    ))
  );
 
};


export default TestView;