import React, { useEffect } from "react";
import { useState } from "react";
import { View, Button , TextInput, ScrollView, StyleSheet, Text } from 'react-native';
const axios = require("axios").default;

const RecetasScreen = ({ navigation }) => {

  const [isInit, setIsInit] = useState(false);
  const [artifacts, setArtifacts] = useState([]);

  async function getData() {
    await axios
      .get(
        "https://p8ada5o8e0.execute-api.us-east-1.amazonaws.com/Prod/listartifacts",
        {
          headers: {
            "Authorization": "Bearer "
          }
        }
      )
      .then(function ({ data }) {
        const item = data.item;
        console.log(item);
        setArtifacts(item.Contents);
        setIsInit(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  useEffect(() => {
    if (!isInit) {
      getData();
    }
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Recetas</Text>
      <br />
      <ScrollView style={styles.container}>
      {
        artifacts.map((artifact, index) => (
          <Text>{getName(artifact.Key)}</Text>
          )
        )
      }
    </ScrollView>
    </View>
  );
};

function getName(key) {
  return key.substring(key.indexOf('/', key.length - 1));
}

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


export default RecetasScreen;
