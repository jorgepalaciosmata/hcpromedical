import React, { useState, useEffect } from "react";
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthService from './services/AuthService';

//Views Imports
import PersonalInfoScreen from './screens/PersonalInfoScreen';
import HistorialMedicoScreen from './screens/HistorialMedicoScreen';
import LaboratorioScreen from './screens/LaboratorioScreen';
import RecetasScreen from './screens/RecetasScreen';
import AuthenticationScreen from './screens/AuthenticationScreen';

function HomeScreen({ navigation }) {
  return (
      <View style={{ flexWrap:'wrap', alignItems: 'left', flexDirection: "row", padding: '20px' }}>
        <TouchableOpacity 
          style={{width: 150, alignItems: 'center'}}
          onPress={() => navigation.navigate('PersonalInfo')} >
          <Image source={require('./assets/icons/nutricion.png')} 
            style = {{ width: 100, height: 100 }} />
          <Text>Informacion Personal</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{width: 150, alignItems: 'center'}}
          onPress={() => navigation.navigate('Historial')} >
          <Image source={require('./assets/icons/medical-history.png')} 
            style = {{ width: 100, height: 100 }} />
          <Text>Historial médico</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{width: 150, alignItems: 'center'}}
          onPress={() => navigation.navigate('Laboratorio')} >
          <Image source={require('./assets/icons/lab.png')} 
            style = {{ width: 100, height: 100 }} />
          <Text>Laboratorio</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{width: 150, alignItems: 'center'}}
          onPress={() => navigation.navigate('Recetas')} >
          <Image source={require('./assets/icons/recetas.png')} 
            style = {{ width: 100, height: 100 }} />
          <Text>Documentos</Text>
        </TouchableOpacity>
      </View>
  );
}

const Stack = createNativeStackNavigator();

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
      <Stack.Navigator initialRouteName="HC Cloud">
        <Stack.Screen name="HC Cloud" component={HomeScreen} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
        <Stack.Screen name="Historial" component={HistorialMedicoScreen} />
        <Stack.Screen name="Laboratorio" component={LaboratorioScreen} />
        <Stack.Screen name="Recetas" component={RecetasScreen} />
      </Stack.Navigator>
    </NavigationContainer>  
    );  
  } else {
    return (
      <AuthenticationScreen />
    );
  }
}

export default App;