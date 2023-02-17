import React from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import { documentsViewStyle } from '../assets/styles/DocumentsViewScreen.style';
import { MedicalEntry } from '../components/MedicalEntry';


export const DocumentsViewScreen = ( ) => {
  
	return (
		<ScrollView>
			<View style={documentsViewStyle.background}>
				<View style={documentsViewStyle.logoCase}>
					<Image  
						source={require('../assets/icons/hc-logo-blanco.png')} 
						style={documentsViewStyle.image}
					/>
				</View> 
				<View style={documentsViewStyle.userCase}>
					<Image  
					source={{uri: 'https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/326668619_1391204798357020_2160394782606121309_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wHxBDMu4WCoAX_v_-fl&_nc_ht=scontent.ftgz3-1.fna&oh=00_AfDFNOJlcUAAM_zCRFmICw5C7GAuTiCrLVC-cluxnfHY1g&oe=63F46CB0'}} 
					style={documentsViewStyle.userImage}	
					/>
					<Text style={documentsViewStyle.text}>Iram Emmanuel Gordillo Moguel</Text>
				</View> 
				

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


