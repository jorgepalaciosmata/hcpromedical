import React, { useEffect, useState } from "react";
import { View, ScrollView, Button, Alert, Modal, StyleSheet, Text, Pressable } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import AuthService from '../services/AuthService';
import { prodApi } from '../api/prodApi';
import Disclaimer from './Disclaimer';

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
              if (error.response.status === 401) {
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                disabled={!request}
                title="Login"
                onPress={() => {
                    promptAsync({useProxy: false, showInRecents: true});
                }} />

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
        </View>
    );
}

const styles = StyleSheet.create({
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