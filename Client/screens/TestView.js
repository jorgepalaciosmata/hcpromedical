import React, {useState, useContext} from 'react';
import CheckBoxCom from '../components/CheckBoxCom';
import TextBoxCom from '../components/TextBoxCom';
import RadioButtonCom from '../components/RadioButtonCom';
import {Button, View, Text} from 'react-native';

export const dataContext = React.createContext();

import inputs from "../assets/data/jsons/InformacionPersonal.json"
import { personalInfoStyle } from '../assets/styles/PersonalInfo.style';
import { NavigationContainer, TabActions } from '@react-navigation/native';

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
		<View style={personalInfoStyle.background}>
			<View>
				<Text>SOY USUARIO TAL</Text>
			</View>
			<View style={personalInfoStyle.back}>
				<View style={personalInfoStyle['content:last-child']}>
					{inputs[0].render}
					{inputs[1].render}
					{inputs[2].render}
				</View>

				<View style={personalInfoStyle.hr} />

				<View style={personalInfoStyle['content:last-child']}>
					{inputs[3].render}
					{inputs[4].render}
				</View>

				<View style={personalInfoStyle.hr} />

				<View style={personalInfoStyle['content:last-child']}>
					{inputs[5].render}
				</View>
			</View>
		</View>
		<Button onPress={onPressEvent}/>

	</dataContext.Provider>
  );

};


export default TestView;