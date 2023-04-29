import React, { useEffect, Fragment, componentWillMount } from "react";
import { useState } from "react";
import { View, Button , Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import AuthService from '../services/AuthService';
import { prodApi } from '../api/prodApi';

// ----

import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BrowserRouter } from 'react-router-dom';
import Sidebar from '@Components/Sidebar';

import '@Styles/App.scss';

import reducers from '@Reducer';
import { ViewFiles } from '@Pages';

import test2 from '@Utils/dummyFileSystem';

const DocumentsScreen = ({ navigation }) => {

  const [isInit, setIsInit] = useState(false);
  const [artifacts, setArtifacts] = useState([]);

  let store = store = createStore(
      reducers,
      {
        fileSystem: test2(artifacts)
      },
      composeWithDevTools()
    );

  useEffect(() => {
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
    getData();
  }, []);

  return (

    (artifacts) &&
    <Provider store={store}>
      <Router>
        <BrowserRouter>
          <Fragment>
            {/* <Sidebar /> */}
            <ViewFiles />
          </Fragment>
        </BrowserRouter>
      </Router>
    </Provider>
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