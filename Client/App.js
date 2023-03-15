import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import AuthService from './services/AuthService';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import { View, Modal, Text, StyleSheet, Pressable } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

//Views Imports
import PersonalInfoScreen from './screens/PersonalInfoScreen';
import DocumentScreen from './screens/DocumentScreen';
import DocumentsScreen from './screens/DocumentsScreen';
import AuthenticationScreen from './screens/AuthenticationScreen';
import { AntecedentesScreen } from './screens/AntecedentesScreen';
import { DoctorScreen } from "./screens/DoctorScreen";

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

  return (
    <>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Compartir historial" onPress={() => setModalVisible(true)}/>
        <DrawerItem label="Cerrar sesión" onPress={() => AuthService.logOut()} />
      </DrawerContentScrollView>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={styles.centeredView}>
              <View style={styles.modalView}>
                  <Text style={styles.modalText}>HC Promedical - Compartir historial</Text>
                  <div style={{marginTop: '30px'}}>
                      <Text style={styles.cancelButton} onPress={() => setModalVisible(false)}>Cancelar</Text>
                      <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={async () => alert('test')}>
                          <Text style={styles.textStyle}>Aceptar</Text>
                      </Pressable>
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

const styles = EStyleSheet.create({
  logoContainer: {
      height: '150px',
      width: '190px'
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

export default App;