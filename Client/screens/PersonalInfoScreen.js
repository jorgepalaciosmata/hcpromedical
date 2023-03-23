import {View, Text, Image} from 'react-native';
import {useForm} from "../hooks/useForm";
import inputsFromJson from "../assets/data/jsons/InformacionPersonal.json"
import {useWhatComWillUse} from "../hooks/useWhatComWillUse";
import {ButtonCom} from "../components/ButtonCom";
import EStyleSheet from 'react-native-extended-stylesheet';
import {FooterCom} from '../components/FooterCom';

const PersonalInfoScreen = ({ editable = true }) => {
	const {data, setData, updateData, loading} = useForm();
	const inputs = useWhatComWillUse(inputsFromJson, data, setData);

	return (
		<View pointerEvents = {editable ? 'auto' : 'none'}>
			<View style = {styles.background}>
				<View style = {styles.userCase}>
					<Image  
						source = {{uri: data.profilePicture }} 
						style = {styles.image}
					/>
					<Text style = {styles.name}>{data.name} {data.firstLastName} {data.secondLastName}</Text>
				</View> 
				<View style = {styles.inputSection}>
					{/* Nombre y Appellidos */}
					<View style = {styles['content:last-child']}>
						{inputs[0].render}
						{inputs[1].render}
						{inputs[2].render}
					</View>

					{/* Fecha de nacimiento */}
					<View style = {styles['content:last-child']}>
						{inputs[3].render}
					</View>

					{/* Género */}
					<View style = {styles['content:last-child']}>
						{inputs[4].render}
					</View>

					<View style = {styles['content:last-child']}>
						{inputs[5].render}
					</View>
					{(editable && !loading) && (
						<View style = {styles.buttonContainer}>
							<ButtonCom
								text = "Actualizar datos"
								onPress = {() => updateData()}
							/>
						</View>		
					)}
				</View>
			</View>
			{editable && (
				<FooterCom />
			)}
		</View>
	);
};

const styles = EStyleSheet.create({
	name: {
		color: "#FFFFFF",
		fontWeight: 'bold'
	},
	background: {
		backgroundColor: '$mainColor',
	},
	inputSection: {
		backgroundColor: '#FFFFFF',
		padding:50,
		flex: 3
	},
	'content:last-child': {
		marginBottom: 30,
	},
	hr: {
		borderBottomWidth: EStyleSheet.hairlineWidth,
		borderColor: 'black',
		borderStyle:'solid',
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 150,
		borderWidth: 2,
		overflow: "hidden",
		marginBottom: 10,
		border: '0px'
	},
	userCase: {
		display:'flex',
		alignItems:'center',
		justifyContent: 'center',
		marginBottom: 30,
		marginTop: 30,
		flex: 1,
		marginLeft: '50px',
		width: '100%',
		maxWidth: '200px'
	},
	buttonContainer: {
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: 30,
	}
  });

export default PersonalInfoScreen;
