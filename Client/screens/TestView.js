import React from 'react';

import CheckBoxCom from '../components/CheckBoxCom';
import TextBoxCom from '../components/TextBoxCom';


import inputs from "../assets/data/testing.json"


const TestView = () => {

	inputs.forEach((input, key) => {
		if (input.inputType=="checkbox") {
			input.render= <CheckBoxCom key={key} options={input.content.options} instructions={input.content.instructions}/>
	
		} else if(input.inputType=="textbox") {
			input.render= <TextBoxCom  key={key} content={input.content}/>
		}
	});

	console.log(inputs)


	return (
  	inputs.map( (input) => (
			input.render
    ))
  );
 
};


export default TestView;