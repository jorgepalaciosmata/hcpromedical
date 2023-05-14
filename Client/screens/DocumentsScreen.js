import React, { useEffect, Fragment, componentWillMount } from "react";
import { useState } from "react";
import { StyleSheet } from 'react-native';
import AuthService from '../services/AuthService';
import { prodApi } from '../api/prodApi';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import '@Styles/App.scss';
import reducers from '@Reducer';
import { ViewFiles } from '@Pages';

import formatFileSystem from '@Utils/fileSystemHelper';

const DocumentsScreen = ({ navigation }) => {

  const [isInit, setIsInit] = useState(false);
  const [artifacts, setArtifacts] = useState([]);

  let store = store = createStore(
      reducers,
      {
        fileSystem: formatFileSystem(artifacts)
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