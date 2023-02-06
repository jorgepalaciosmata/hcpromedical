import React from "react";
import { View, Button , Text, Image } from 'react-native';
import { personalInfoStyle } from '../assets/styles/PersonalInfo.style';
import CheckBoxCom from "../components/CheckBoxCom";
import RadioButtonCom from "../components/RadioButtonCom";
import TextBoxCom from "../components/TextBoxCom";
import { useForm } from "../hooks/useForm";

export const dataContext = React.createContext();
import inputs from "../assets/data/jsons/InformacionPersonal.json"
const PersonalInfoScreen = ({ navigation }) => {
  
	const {data, setData, saveDataFromInput, updateData} = useForm();

	inputs.forEach((input, key) => {
		if (input.inputType=="checkbox") {
			input.render= <CheckBoxCom key={key} content={input.content} />
		} else if(input.inputType=="textbox") {
			input.render= <TextBoxCom  key={key} content={input.content} />
		} else if(input.inputType=="radioButton") {
			input.render= <RadioButtonCom  key={key} content={input.content} />
		}
	});

	return (
		<dataContext.Provider value={{data, saveDataFromInput}}>
			<View style={personalInfoStyle.background}>
				<View style={personalInfoStyle.userCase}>
					<Image  
					source={{uri: data.profilePicture}} 
					style={personalInfoStyle.image}
					/>
					<Text style={personalInfoStyle.text}>{data.name} {data.firstLastName} {data.secondLastName}</Text>
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
			<Button onPress={updateData}/>
		</dataContext.Provider>
	);
	};

export default PersonalInfoScreen;
