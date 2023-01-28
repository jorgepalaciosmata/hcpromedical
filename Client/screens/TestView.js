import React, {useState, useContext} from 'react';

import CheckBoxCom from '../components/CheckBoxCom';
import TextBoxCom from '../components/TextBoxCom';
import RadioButtonCom from '../components/RadioButtonCom';
import {Button, View} from 'react-native';

export const dataContext = React.createContext();

import inputs from "../assets/data/testing.json"

	const TestView = () => {

	const [data, setData] = useState({});

	inputs.forEach((input, key) => {
		if (input.inputType=="checkbox") {
			input.render= <CheckBoxCom key={key} content={input.content} />
		} else if(input.inputType=="textbox") {
			input.render= <TextBoxCom  key={key} content={input.content} setData={setData}/>
		} else if(input.inputType=="radioButton") {
			input.render= <RadioButtonCom  key={key} content={input.content} setData={setData}/>
		}
	});

	const onPressEvent = () => {
		console.log(data)
	}

	const saveDataFromInput = (name, value) => {
		setData({...data, [name]:value});
	}

	return (
	<dataContext.Provider value={saveDataFromInput}>
  	{inputs.map( (input) => (
			input.render
    ))}

		<Button onPress={onPressEvent}/>
	</dataContext.Provider>
  );

};


export default TestView;