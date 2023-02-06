import React, {useState, useContext} from 'react';
import CheckBoxCom from '../components/CheckBoxCom';
import TextBoxCom from '../components/TextBoxCom';
import RadioButtonCom from '../components/RadioButtonCom';
import {Button, View, Text, Image} from 'react-native';

export const dataContext = React.createContext();

import inputs from "../assets/data/jsons/InformacionPersonal.json"
import { personalInfoStyle } from '../assets/styles/PersonalInfo.style';

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
			<View style={personalInfoStyle.userCase}>
				<Image  
				source={{uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80"}} 
				style={personalInfoStyle.image}
				/>
				<Text style={personalInfoStyle.text}>Maria Sanchez Dominguez</Text>
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