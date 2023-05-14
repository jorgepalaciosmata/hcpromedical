import {View, Text, Image} from 'react-native';
import AuthService from '../services/AuthService';
import EStyleSheet from 'react-native-extended-stylesheet';
import {FooterCom} from "../components/FooterCom";

const HomeScreen = () => {
    return (
        <View>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Hola, {getUserDisplayName()}!</Text>
                <Text style={styles.paragraph}>
                    HC Folder es una aplicación para almacenar y 
                    organizar tu información médica. 
                </Text>
                <Text>
                    Para saber más consulta preguntas frecuentes. 
                </Text>
            </View>
            <FooterCom />
        </View>
    );
};

const getUserDisplayName = () => {
    let token = AuthService.getCurrentUserToken();
    return token.name;
};

const styles = EStyleSheet.create({
    title: {
        fontSize: '20px'
    },
    mainContainer: {
        minHeight: '700px',
        height: "100%",
        backgroundColor: "#FFFFFF",
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30,
        paddingBottom: 30,
    },
    paragraph:{
        marginTop: '20px'
    }
});

export default HomeScreen;