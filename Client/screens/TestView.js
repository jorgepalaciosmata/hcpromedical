import React from 'react'

import inputs from '../assets/data/jsons/Antecedentes.json'
import CheckBoxCom from '../components/CheckBoxCom'
import CheckBoxTextCom from '../components/CheckBoxTextCom'

const TestView = () => {
  inputs.forEach((input, key) => {
		if (input.inputType=="checkbox") {
			input.render= <CheckBoxCom key={key} content={input.content} />
		} else if(input.inputType=="textbox") {
			input.render= <TextBoxCom  key={key} content={input.content} />
		} else if(input.inputType=="radioButton") {
			input.render= <RadioButtonCom  key={key} content={input.content} />
		} else if (input.inputType=="checkboxText") {
      input.render= <CheckBoxTextCom key={key} content={input.content} />
    }
	});

  return (
    inputs.map(input=> (
       input.render
    ))
    
  )
}


export default TestView;