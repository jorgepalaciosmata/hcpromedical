import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { prodApi } from "../api/prodApi";
import AuthService from '../services/AuthService';
import { useEffect, useState } from "react";
import {FooterCom} from '../components/FooterCom';
import inputsFromJson from "../assets/data/jsons/Antecedentes.json";

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

  function getDiseasesList(diseasesObject) {
    let diseaseList = [];
    for (let name in diseasesObject) {
      if (diseasesObject[name]) {
        diseaseList.push(getDiseaseName(name));
      }
    }

    return diseaseList.join(", ") + ".";
  }

  function getDiseaseName(key) {
    for (let index = 0; index < inputsFromJson.length; index++) {
      if (inputsFromJson[index].content.name === key) {
        return inputsFromJson[index].content.display;
      }
    }
    return '';
  }

  useEffect(() => {
      getData();
  }, []);

  return (
    <>
    <View style={styles.container}>

      <ImageBackground source={require('../assets/footer-image.png')} style={styles.headerImage}>
        <View style={styles.overlay}>
          <View style = {styles.background}>
            <View style = {styles.userCase}>
              <Image  
                source = {{uri: data.profilePicture }} 
                style = {styles.image}
              />
              <Text style = {styles.name}>{data.name} {data.firstLastName} {data.secondLastName}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.mainInfoContainer}>
      <View style={styles.inputContainer}>
          {/* Direccion */}
          <Text style={styles.inputName}>Dirección</Text>
          <Text style={styles.valueContainer}>{data.address}</Text>
        </View>
        <View style={styles.inputContainer}>
          {/* Fecha de nacimiento */}
          <Text style={styles.inputName}>Fecha de nacimiento</Text>
          <Text style={styles.valueContainer}>{data.birthday}</Text>
        </View>
        <View style={styles.inputContainer}>
          {/* Género */}
          <Text style={styles.inputName}>Género</Text>
          <Text style={styles.valueContainer}>{data.gender}</Text>
        </View>
        
        {/* Historial */}
        {/* Estatura */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputName}>Estatura</Text>
          <Text style={styles.valueContainer}>
            {data.measurements?.height}
          </Text>
        </View>

        {/* Peso */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputName}>Peso</Text>
          <Text style={styles.valueContainer}>
            {data.measurements?.weight}
          </Text>
        </View>

        {/* Antecedentes */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputName}>Antecedentes</Text>
          <View>
            <Text style={styles.valueContainer}>
              { getDiseasesList(data.diseases) }
            </Text>
          </View>
        </View>

        {/* Habitos */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputName}>Hábitos</Text>
            {(data.habits && data.habits.exerciseType) && 
              (<View>
                <Text style={styles.valueContainer}>
                  Tipo de ejercicio: {data.habits.exerciseType}
                </Text>
              </View>
            )}

            {(data.habits && data.habits.exerciseFrequency) && 
              (<View>
                <Text style={styles.valueContainer}>
                  Frecuencia: {data.habits.exerciseFrequency}
                </Text>
              </View>
            )}

            {(data.habits && data.habits.alcohol) && 
              (<View>
                <Text style={styles.valueContainer}>
                  Alcohol: {data.habits.alcohol}
                </Text>
              </View>
            )}

            {(data.habits && data.habits.tabaco) && 
              (<View>
                <Text style={styles.valueContainer}>
                  Tabaco: {data.habits.tabaco}
                </Text>
              </View>
            )}

            {(data.habits && data.habits.drugs) && 
              (<View>
                <Text style={styles.valueContainer}>
                  Drogas recreacionales: {data.habits.drugs}
                </Text>
              </View>
            )}
        </View>
      </View>
    </View>
    <FooterCom />
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '300px',
    resizeMode:'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    //backgroundColor: 'rgba(39,51,88, 0.5)',
    backgroundColor: 'rgba(39,51,88, 0.75)',
},
  background: {
    //backgroundColor: '#273358',
    backgroundColor: 'rgba(39,51,88, 0.75)',
	},
  container: {
    backgroundColor: 'white'
  },
  mainInfoContainer: {
    marginLeft: '50px',
    height: '500px',
    marginTop: '50px'
  },
  image: {
		width: 150,
		height: 150,
		borderRadius: 150,
		borderWidth: 2,
		overflow: "hidden",
		marginBottom: 10,
		border: '0px'
  },
  userCase: {
		display:'flex',
		alignItems:'center',
		justifyContent: 'center',
		marginBottom: 30,
		marginTop: 30,
		flex: 1,
		marginLeft: '30px',
		width: '100%',
		maxWidth: '200px'
	},
  name: {
		color: "#FFFFFF",
		fontWeight: 'bold'
  },
  inputContainer: {
    marginBottom: '10px'
  },
  inputName: {
    fontSize: '10px',
    fontWeight: 'bold',
    color: '#fc2954'
  },
  valueContainer: {
    marginLeft: '5px',
    color: "#4D4D4D"
  }
});
