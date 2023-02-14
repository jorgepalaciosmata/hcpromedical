import React from 'react'
import CheckBoxCom from "../components/CheckBoxCom";
import RadioButtonCom from "../components/RadioButtonCom";
import TextBoxCom from "../components/TextBoxCom";
import CheckBoxTextCom from "../components/CheckBoxTextCom";

/*Este hook recibe dos cosas importantes:
    -Data(para que este dentro del componente al que va dirigido pueda ser precargada)
	-setData (una funcion que nos ayudara a guardar nuestros datos)

*/
export const useWhatComWillUse = (inputs, data, setData) => {
    inputs.forEach((input, key) => {
		if (input.inputType=="checkbox") {
			input.render= <CheckBoxCom 
							key={key} 
							content={input.content}
							data={data}
							setData={setData} />
		} else if(input.inputType=="textbox") {
			input.render= <TextBoxCom  
							key={key} 
							content={input.content}
							data={data}
							setData={setData} />
		} else if(input.inputType=="radioButton") {
			input.render= <RadioButtonCom  
							key={key} 
							content={input.content}
							data={data}
							setData={setData} />
		} else if (input.inputType=="checkboxText") {
			input.render= <CheckBoxTextCom 
							key={key} 
							content={input.content}
							data={data}
							setData={setData} />
		}
	});

    return {
        inputs
    }
}
