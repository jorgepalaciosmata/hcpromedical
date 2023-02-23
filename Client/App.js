import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import AuthService from './services/AuthService';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
      <Drawer.Navigator initialRouteName="HC Cloud">
        <Drawer.Screen name="HC Folder" component={HomeScreen} />
        <Drawer.Screen name="Información personal" component={PersonalInfoScreen} />
        <Drawer.Screen name="Antecedentes" component={AntecedentesScreen} />
        <Drawer.Screen name="Documentos" component={DocumentsScreen} />
        <Drawer.Screen name="Datos" component={DoctorScreen} />
      </Drawer.Navigator>
    </NavigationContainer>  
    );  
  } else {
    return (
      <AuthenticationScreen />
    );
  }
}

export default App;