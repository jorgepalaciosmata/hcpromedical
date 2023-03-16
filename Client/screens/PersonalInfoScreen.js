import {View, Text, Image} from 'react-native';
import {useForm} from "../hooks/useForm";
import inputsFromJson from "../assets/data/jsons/InformacionPersonal.json"
import {useWhatComWillUse} from "../hooks/useWhatComWillUse";
import {ButtonCom} from "../components/ButtonCom";
import EStyleSheet from 'react-native-extended-stylesheet';
import {FooterCom} from '../components/FooterCom';

const PersonalInfoScreen = ({ editable = true }) => {
	const {data, setData, updateData, loading} = useForm();
	const {inputs} = useWhatComWillUse(inputsFromJson, data, setData);

	return (
		<View pointerEvents = {editable ? 'auto' : 'none'}>
			<View style = {styles.background}>
				<View style = {styles.userCase}>
					<Image  
						source = {{uri: data.profilePicture }} 
						style = {styles.image}
					/>
					<Text style = {{color: "#FFFFFF"}}>{data.name} {data.firstLastName} {data.secondLastName}</Text>
				</View> 
				<View style = {styles.back}>
					<View style = {styles['content:last-child']}>
						{inputs[0].render}
						{inputs[1].render}
						{inputs[2].render}
						{inputs[3].render}
					</View>

					<View style = {styles.hr} />

					<View style = {styles['content:last-child']}>
						{inputs[4].render}
					</View>

					<View style = {styles.hr} />

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
	background: {
		backgroundColor: '$mainColor',
	},
	back: {
		backgroundColor: '#FFFFFF',
		borderTopLeftRadius: 70,
		padding:50,
		flex: 3
	},
	'content:last-child': {
		marginTop: 30,
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
		borderColor: "black",
		overflow: "hidden",
		marginBottom: 10,
	},
	userCase: {
		display:'flex',
		alignItems:'center',
		justifyContent: 'center',
		marginBottom: 30,
		marginTop: 30,
		flex: 1,
	},
	buttonContainer: {
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: 30,
	}
  });

export default PersonalInfoScreen;
