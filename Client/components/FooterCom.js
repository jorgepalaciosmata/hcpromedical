import {TouchableOpacity, View, Text, Linking, StyleSheet, ImageBackground} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const FooterCom = () => {
    return (
        <View style={{height: '10%'}}>
            <ImageBackground source={require('../assets/footer-image.png')} style={styles.image}>
                <View style={styles.overlay}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={ () => Linking.openURL('https://www.hcpromedical.com/aviso-de-privacidad.html') }>
                        <Text style={[styles.link, styles.text]}>Aviso de privacidad</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Todos los derechos reservados</Text>
                    <Text style={styles.text}>HCPROMEDICAL©</Text>
                </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = EStyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode:'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        backgroundColor: 'rgba(39, 51, 88, 0.5)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    link: {
        textDecorationLine:'underline',
    },
    text: {
        color:'#ffffff',
        marginBottom: 4,
    }
});
