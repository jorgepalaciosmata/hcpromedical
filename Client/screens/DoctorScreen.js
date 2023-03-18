import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { prodApi } from "../api/prodApi";
import AuthService from '../services/AuthService';
import { useEffect, useState } from "react";

export const DoctorScreen = () => {
  const [data, setData] = useState({});

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  async function getData() {
    const response = await prodApi.get( '/personalInfo/self', {
      headers: {
        "Authorization" : params.sharekey ? 
          "sharekey=" + params.sharekey : 
          AuthService.getCurrentUser(),
      }
    }).catch(function (error) {
      if (error.response.status === 401) {
          AuthService.logOut();
      }
    });
    setData( response.data.item );
    console.log( response );
  }

  useEffect(() => {
      getData();
  }, []);

  return (
    <>
    <View>
      <Text>test</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  
});
