import {View, Text, ScrollView} from 'react-native';
import {MedicalEntry} from '../components/MedicalEntry';
import EStyleSheet from 'react-native-extended-stylesheet';

export const DocumentsViewScreen = () => {
	return (
		<ScrollView>
			<View style = {styles.back}>
				<Text style = {styles.title}>Datos del Paciente: </Text>

				<Text style = {styles.subtitle}>Febrero 2023</Text>
				<View style = {{alignItems: 'center', marginBottom: 20}} >
					<MedicalEntry/>
					<MedicalEntry/>
					<MedicalEntry />
				</View>

				<Text style = {styles.subtitle}>Febrero 2023</Text>
				<View style = {{alignItems: 'center', marginBottom: 20}} >
					<MedicalEntry/>
					<MedicalEntry/>
					<MedicalEntry/>
				</View>

				<Text style = {styles.subtitle}>Febrero 2023</Text>
				<View style = {{alignItems: 'center'}} >
					<MedicalEntry/>
					<MedicalEntry/>
					<MedicalEntry/>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = EStyleSheet.create({
    back: {
        backgroundColor: '#FFFFFF',        
    },
    title: {
        fontSize: 24,
        marginTop: 20,
        marginLeft: 40,
        marginBottom: 30
    },
    subtitle: {
        fontStyle: "normal",
        fontSize: 20,
        marginLeft: 40
    }
});
  

