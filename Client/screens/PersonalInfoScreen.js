import React, { useEffect } from "react";
import { useState } from "react";
import { View, Button , TextInput, ScrollView, StyleSheet, Text } from 'react-native';
import { prodApi } from "../api/prodApi";
const axios = require("axios").default;

import inputs from "../assets/data/inputs.json";

const PersonalInfoScreen = ({ navigation }) => {

  const [user, setUser] = useState({
    id:"", //I need to fix this problem later!
    name: "",
    lastName: "",
    phone: "",
  });
  
  const [isInit, setIsInit] = useState(false);

  const handleChangeText = (name , value) => {
    setUser({...user, [name]:value});
  }

  async function getData() {
    const response = await prodApi.get( '/personalInfo/50' );
    setUser( response.data.item )
  }

  useEffect(() => {
      getData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {inputs.map((input, index) => (
        <View style={styles.inputStyle} key={index}>
          <Text>{input.handleChangeText + ':'}</Text>
          <TextInput
            defaultValue={user[input.handleChangeText]}
            onChangeText={(value) =>handleChangeText(`${input.handleChangeText}`, value)}
          />
        </View>
      ))}

      <View style={styles.inputStyle}>
        <Button title="Save"  />
      </View>
    </ScrollView>
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


export default PersonalInfoScreen;
