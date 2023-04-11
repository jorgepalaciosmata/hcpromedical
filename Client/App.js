import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import AuthService from './services/AuthService';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { prodApi } from './api/prodApi';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';

//Views Imports
import PersonalInfoScreen from './screens/PersonalInfoScreen';
import DocumentsScreen from './screens/DocumentsScreen';
import AuthenticationScreen from './screens/AuthenticationScreen';
import { AntecedentesScreen } from './screens/AntecedentesScreen';
import { DoctorScreen } from "./screens/DoctorScreen";
import ClinicalHistoriesScreen from "./screens/ClinicalHistories";

EStyleSheet.build({ 
  $mainColor: 'rgb(39, 51, 88)'
});

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

  async function openShareDialog() {
    const response = await prodApi.get( '/getsharelink', {
      headers: {
        "Authorization": AuthService.getCurrentUser()
      }
    }).catch(function (error) {
      console.log(error);
    });

    setShareLink(composeShareLinkAddress(response.data));
    setModalVisible(true);
  }

  function composeShareLinkAddress(key) {
    return window.location.protocol + '//' 
      + window.location.hostname
      + ':' + window.location.port
      + '?sharekey='
      + key;
  }

  return (
    <>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Compartir historial" onPress={() => {openShareDialog(); props.navigation.closeDrawer()}}/>
        <DrawerItem label="Cerrar sesión" onPress={() => AuthService.logOut()} />
      </DrawerContentScrollView>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={styles.centeredView}>
              <View style={styles.modalView}>
                  <Text style={styles.modalText}>Compartir historial</Text>
                  <Text style={styles.instructionsLabel}>
                    Tu profesional de la salud puede escanear este código QR con su dispositivo móvil para acceder a tu historial. 
                  </Text>
                  <QRCode value={shareLink} />

                  <TouchableOpacity style={styles.shareLink}>
                    <Text style={styles.copyShareLink}>O has click aquí para compiar el vínculo y compartirlo.</Text>
                  </TouchableOpacity>
                  {Clipboard.setString(shareLink)}

                  <div style={styles.buttonsContainer}>
                      <Text style={styles.cancelButton} onPress={() => setModalVisible(false)}>Cerrar</Text>
                  </div>
              </View>
          </View>
      </Modal>
    </>
  );
}

function HCPromedicalDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HC Folder" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="HC Folder" component={HomeScreen} />
      <Drawer.Screen name="Datos personales" component={PersonalInfoScreen} />
      <Drawer.Screen name="Historial" component={AntecedentesScreen} />
      <Drawer.Screen name="Documentos" component={DocumentsScreen} />
      <Drawer.Screen name="Historias clínicas" component={ClinicalHistoriesScreen} />
    </Drawer.Navigator>
  );
}

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  if (params.sharekey) {
    return (
      <DoctorScreen />
    );
  }

  if (currentUser) {
    return (
      <NavigationContainer>
        <HCPromedicalDrawer />
      </NavigationContainer>
    );  
  }

  return (
    <AuthenticationScreen />
  );
}

const styles = EStyleSheet.create({
  shareLink: {
    marginTop: '10px',
  },
  copyShareLink: {
    fontWeight: 'bold',
    marginTop: '10px'
  },
  logoContainer: {
      height: '150px',
      width: '190px'
  },
  container: {
      flex: 1,
      flexDirection: 'row',
      height: '100%',
      backgroundColor: '#F2F2F2'
  },
  containerItem: {
      flex:1, 
      width: '50%',
  },
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