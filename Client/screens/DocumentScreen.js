import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { prodApi } from '../api/prodApi';
import AuthService from '../services/AuthService';

const DocumentScreen = ({ navigation, route }) => {

    const [isInit, setIsInit] = useState(false);
    const [artifactUrl, setArtifactUrl] = useState([]);

    async function getData() {
        await prodApi.get(
            "/artifact",
            {
              headers: {
                "Authorization": AuthService.getCurrentUser()
              },
              params: {
                  id: route.params.artifact.name
              }
            }
          )
          .then(function ({ data }) {
            setArtifactUrl(data);
            setIsInit(true);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      }

    function formatDate(dateString) {
        let date = new Date(dateString);
        return date.getDate() + '/'+ (date.getMonth() + 1) + '/' + date.getFullYear();
    }

    useEffect(() => {
        if (!isInit) {
          getData();
        }
      }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.artifactName}>{route.params.artifact.name}</Text>
            <Text style={styles.created}>{formatDate(route.params.artifact.created)}</Text>
            <iframe height="95%" width="95%" src={artifactUrl}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: '20px'
    },
    artifactName: {
        fontWeight: 'bold',
        fontSize: '16px',
    },
    created: {
        color: '#4b4b4b',
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '15px'
    }
});

export default DocumentScreen;