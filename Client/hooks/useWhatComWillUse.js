import React from 'react'
import CheckBoxCom from "../components/CheckBoxCom";
import RadioButtonCom from "../components/RadioButtonCom";
import TextBoxCom from "../components/TextBoxCom";
import CheckBoxTextCom from "../components/CheckBoxTextCom";

export const useWhatComWillUse = (inputs) => {
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

    return {
        inputs
    }
}
