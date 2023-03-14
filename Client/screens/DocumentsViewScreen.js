import React from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import { documentsViewStyle } from '../assets/styles/DocumentsViewScreen.style';
import { MedicalEntry } from '../components/MedicalEntry';


export const DocumentsViewScreen = ( ) => {
  
	return (
		<ScrollView>
			<View style={documentsViewStyle.background}>
				<View style={documentsViewStyle.back}>
					<Text style={documentsViewStyle.title}>Datos del Paciente: </Text>

					<Text style={documentsViewStyle.subtitle}>Febrero 2023</Text>
					<View style={{alignItems: 'center', marginBottom: 20}} >
						<MedicalEntry></MedicalEntry>
						<MedicalEntry></MedicalEntry>
						<MedicalEntry ></MedicalEntry>
					</View>

					<Text style={documentsViewStyle.subtitle}>Febrero 2023</Text>
					<View style={{alignItems: 'center', marginBottom: 20}} >
						<MedicalEntry></MedicalEntry>
						<MedicalEntry></MedicalEntry>
						<MedicalEntry></MedicalEntry>
					</View>

					<Text style={documentsViewStyle.subtitle}>Febrero 2023</Text>
					<View style={{alignItems: 'center'}} >
						<MedicalEntry></MedicalEntry>
						<MedicalEntry></MedicalEntry>
						<MedicalEntry></MedicalEntry>
					</View>
					
				</View>
			</View>
		</ScrollView>
	);
	};


