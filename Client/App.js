import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import AuthService from './services/AuthService';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import { View, Modal, Text, StyleSheet, Pressable } from 'react-native';
import { prodApi } from './api/prodApi';
import QRCode from 'react-native-qrcode-svg';

//Views Imports
import PersonalInfoScreen from './screens/PersonalInfoScreen';
import DocumentScreen from './screens/DocumentScreen';
import DocumentsScreen from './screens/DocumentsScreen';
import AuthenticationScreen from './screens/AuthenticationScreen';
import { AntecedentesScreen } from './screens/AntecedentesScreen';
import { DoctorScreen } from "./screens/DoctorScreen";

function HomeScreen({ navigation }) {
  return (
      <>
      </>
  );
}

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [shareLink, setShareLink] = useState("");

  async function openDialog() {
    const response = await prodApi.get( '/getsharelink', {
      headers: {
        "Authorization": AuthService.getCurrentUser()
      }
    }).catch(function (error) {
      console.log(error);
    });

    setShareLink(composeShareLinkAddress(response.data.key));
    setModalVisible(true);
  }

  function composeShareLinkAddress(key) {
    return window.location.protocol + '//' 
      + window.location.hostname
      + '?key='
      + key;
  }

  return (
    <>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Compartir historial" onPress={() => openDialog()}/>
        <DrawerItem label="Cerrar sesión" onPress={() => AuthService.logOut()} />
      </DrawerContentScrollView>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={shareLinkStyles.centeredView}>
              <View style={shareLinkStyles.modalView}>
                  <Text style={shareLinkStyles.modalText}>Compartir historial</Text>
                  <Text style={shareLinkStyles.instructionsLabel}>
                    Tu profesional de la salud puede escanear este código QR con su dispositivo móvil para acceder a tu historial. 
                  </Text>
                  <QRCode value={shareLink} />
                  <div style={shareLinkStyles.buttonsContainer}>
                      <Text style={shareLinkStyles.cancelButton} onPress={() => setModalVisible(false)}>Cerrar</Text>
                  </div>
              </View>
          </View>
      </Modal>
    </>
  );
}

function HCPromedicalDrawer() {
  return (

    <Drawer.Navigator initialRouteName="HC Cloud" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="HC Folder" component={HomeScreen} />
      <Drawer.Screen name="Información personal" component={PersonalInfoScreen} />
      <Drawer.Screen name="Antecedentes" component={AntecedentesScreen} />
      <Drawer.Screen name="Documentos" component={DocumentsScreen} />
      <Drawer.Screen name="Datos" component={DoctorScreen} />
    </Drawer.Navigator>
  );
}

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    
    if (user) {
      setCurrentUser(user);
    }

  }, []);

  if (currentUser) {
    return (
      <NavigationContainer>
        <HCPromedicalDrawer />
      </NavigationContainer>
    );  
  } else {
    return (
      <AuthenticationScreen />
    );
  }
}

const shareLinkStyles = StyleSheet.create({
  buttonsContainer: {
    marginTop: '30px'
  },
  instructionsLabel: {
    marginTop: '20px',
    marginBottom: '20px'
  },  
  cancelButton: {
      float: 'left', 
      marginTop: '10px', 
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
  modalText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20px'
  },
});

export default App;