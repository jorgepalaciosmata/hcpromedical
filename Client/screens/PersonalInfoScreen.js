import React from "react";
import { View, Button , Text, Image, ScrollView } from 'react-native';
import { personalInfoStyle } from '../assets/styles/PersonalInfo.style';
import { useForm } from "../hooks/useForm";
import inputsFromJson from "../assets/data/jsons/InformacionPersonal.json"
import { useWhatComWillUse } from "../hooks/useWhatComWillUse";
import { ButtonCom } from "../components/ButtonCom";
import { CalendarCom } from "../components/CalendarCom";

const PersonalInfoScreen = ({ navigation }) => {
  
	const {data, setData, updateData} = useForm();
	const {inputs} = useWhatComWillUse(inputsFromJson, data, setData);

	return (
		<ScrollView>
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
						<CalendarCom text="Fecha de Nacimiento:" />
						{inputs[4].render}
					</View>

					<View style={personalInfoStyle.hr} />

					<View style={personalInfoStyle['content:last-child']}>
						{inputs[5].render}
					</View>
				</View>
			</View>
			<View style={personalInfoStyle.buttonContainer}>
				<ButtonCom
					text="Actualizar datos"
					onPress={()=>updateData()}
					/>
			</View>		
		</ScrollView>
	);
	};

export default PersonalInfoScreen;
