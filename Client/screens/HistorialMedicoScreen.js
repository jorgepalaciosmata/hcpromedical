import React, { useEffect } from "react";
import { useState } from "react";
import { View, Button , TextInput, ScrollView, StyleSheet, Text } from 'react-native';

const HistorialMedicoScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Historial</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      padding: 35
  },
  inputStyle: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderRadius: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
  }
})

export default HistorialMedicoScreen;