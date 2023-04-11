import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, Alert, Linking, Modal, StyleSheet, Text, Pressable } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import AuthService from '../services/AuthService';
import { prodApi } from '../api/prodApi';
import Disclaimer from './Disclaimer';
import EStyleSheet from 'react-native-extended-stylesheet';

WebBrowser.maybeCompleteAuthSession();

const AuthenticationScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [request, response, promptAsync] = Google.useAuthRequest({
        responseType: "id_token",
        webClientId: '109720273058-ailnd6jvmnst2ihfei9dqjbe9j4t4gih.apps.googleusercontent.com',
    });

    React.useEffect(() => {
        async function getCurrentUser() {
            AuthService.setCurrentUser(response.params.id_token);

            try {
                await prodApi.get( '/personalInfo/self', {
                    headers: {
                        "Authorization": AuthService.getCurrentUser()
                    }
                });
                location.reload();
            } catch (error){
              if (error.response.status === 404) {
                setModalVisible(true);
              }  
            }
        }

        if (response?.type === 'success') {
            getCurrentUser();
        }
    }, [response]);

    async function OnboardUser() {
        let token = AuthService.getCurrentUserToken();
        let userInfo = {
            id: token.email, 
            name: token.given_name,
            firstLastName: token.family_name,
            profilePicture: token.picture
        };
        await prodApi.post('/personalinfo', userInfo, {
            headers: {
                "Authorization": AuthService.getCurrentUser()
            }
        });
        location.reload();
    }

    function CancelOnboarding() {
        setModalVisible(!modalVisible);
        AuthService.logOut();
    }

    return (
        <>
            <View style={styles.container}>
                {/* <View style={styles.containerItem}>
                    <Image style={{width: '100%', flex:1, height: '100%'}}  source={require('../assets/landing.jpg')} />
                </View> */}
                <View style={styles.containerItem}>
                    <View style={{padding: '40px', height: '100%'}}>
                        <View style={styles.logoContainer}>
                            <Image style={{width: '190px', height: '150px'}} source={require('../assets/logo.png')} />
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{ width: '100%', maxWidth: '400px'}}>
                                Bienvenido a <b>HC Folder</b>! tu historial médico electrónico que te permite alamcenar, compartir y analizar tu información para el cuidado de tu salud.
                                Inicia sesión para comenzar.
                            </Text>
                        </View>
                        <View style={{marginTop: '50px', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => {
                                promptAsync({useProxy: false, showInRecents: true});
                            }}>
                                <Image style={{width: '191px', height:'46px'}}  source={require('../assets/google_logo.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.footer}>
                            <Text style={{color: 'blue'}} 
                                onPress={() => Linking.openURL('https://www.hcpromedical.com/aviso-de-privacidad.html')}>
                                Aviso de privacidad.
                            </Text>
                            <Text>
                                Todos los derechos reservados.
                                <br/>
                                HC Promedical ©.
                            </Text>
                        </View>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>HC Promedical - Aviso de privacidad</Text>
                        <Disclaimer />
                        <div style={{marginTop: '30px'}}>
                            <Text style={styles.cancelButton} onPress={() => CancelOnboarding()}>Cancelar</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={async () => OnboardUser()}>
                                <Text style={styles.textStyle}>Aceptar</Text>
                            </Pressable>
                        </div>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = EStyleSheet.create({
    logoContainer: {
        height: '300px',
        width: '100%',
        alignItems: 'center', justifyContent: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        // flexWrap: 'wrap',
        // alignItems: 'flex-start',
        height: '100%',
        backgroundColor: '#F2F2F2'
    },
    containerItem: {
        flex:1, 
        width: '50%',
    },
    footer: {
        width: '100%', 
        marginBottom: '20px', 
        textAlign: 'center', 
        position: 'absolute', 
        bottom: 0
    },  
    cancelButton: {
        float: 'left', 
        marginTop: '10px', 
        marginRight: '30px', 
        color:'#2196F3',
        textDecorationLine: 'underline'
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: 500
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      float: 'left'
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '20px'
    },
  });

export default AuthenticationScreen;