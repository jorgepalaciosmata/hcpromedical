import React, { useEffect } from "react";
import { useState } from "react";
import { View, Button , Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import AuthService from '../services/AuthService';
import { prodApi } from '../api/prodApi';

const DocumentsScreen = ({ navigation }) => {

  const [isInit, setIsInit] = useState(false);
  const [artifacts, setArtifacts] = useState([]);

  async function getData() {
    await prodApi.get(
        "/listartifacts",
        {
          headers: {
            "Authorization": AuthService.getCurrentUser()
          }
        }
      )
      .then(function ({ data }) {
        setArtifacts(data);
        setIsInit(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  function loadDocument(artifact) {
    navigation.navigate('Documento', {artifact: artifact});
  }

  useEffect(() => {
    if (!isInit) {
      getData();
    }
  }, []);

  return (
    <View>
      <ScrollView style={styles.container}>
      {
        artifacts.map((artifact, index) => ( 
          <View style={styles.documentItem}>
            <Pressable onPress={() => loadDocument(artifact)}>
              <Text style={styles.documentName}>
                {artifact.name}
              </Text>
            </Pressable>
            <Text>{ formatDate(artifact.created) }</Text>
          </View>
          )
        )
      }
    </ScrollView>
    </View>
  );
};

function formatDate(dateString) {
  let date = new Date(dateString);
  return date.getDate() + '/'+ (date.getMonth() + 1) + '/' + date.getFullYear();
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
  },
  documentItem: {
    marginTop: '10px'
  },
  documentName: {
    fontWeight: 'bold',
    fontSize: '16px'
  }
})

export default DocumentsScreen;