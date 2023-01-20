import React, { useEffect } from "react";
import { useState } from "react";
import { View, Button , TextInput, ScrollView, StyleSheet, Text } from 'react-native';
const axios = require("axios").default;

import inputs from "../assets/data/inputs.json";

const PersonalInfoScreen = ({ navigation }) => {

  const [user, setUser] = useState("");
  
  const handleChangeText = (name , value) => {
    setUser({...user, [name]:value});
  }

 

  async function getData() {
    await axios
      .get(
        "https://p8ada5o8e0.execute-api.us-east-1.amazonaws.com/Prod/personalInfo/50"
      )
      .then(function ({ data }) {
        const item = data.item;
        console.log(item);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
        setUser("hola")
        console.log(user)
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {inputs.map((input, index) => (
        <View style={styles.inputStyle} key={index}>
          <TextInput
            defaultValue={user.handleChangeText}
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
