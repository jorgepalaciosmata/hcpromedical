import {View, Text, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {FooterCom} from "../components/FooterCom";

const FAQ = () => {

    return (
        <View>
            <View style={styles.mainContainer}>
                <View style={styles.paragraph}>
                    <Text style={styles.title}>Cómo cerrar mi cuenta?</Text>
                    <Text style={styles.answer}>
                        Para cerrar tu cuenta envía un correo electrónico
                        a esta dirección cuentas@hcpromedical.awsapps.com.
                    </Text>
                </View>
                
                <View style={styles.paragraph}>
                    <Text style={styles.title}>Cómo reportar un error?</Text>
                    <Text style={styles.answer}>
                        Si encuentras dificultades técnicas puedes enviar un 
                        correo electrónico a esta dirección soporte@hcpromedical.awsapps.com
                        y comenzaremos a resolver el problema.
                    </Text>
                </View>
            </View>
            <FooterCom />
        </View>
    );
};

const styles = EStyleSheet.create({
    title: {
        fontSize: '20px'
    },
    answer: {
        marginTop: '10px'
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
        marginTop: '20px',
        maxWidth: '600px',
        width: '100%'
    }
});


export default FAQ;