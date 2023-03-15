import React, { useEffect, useState } from 'react'
import { prodApi } from '../api/prodApi';

export const useAntecedentes = () => {
  {/*
    El usuario iniciara con todas las enfermedades en falso (es decir, en su perfil no tendra ninguna enfermedad cargada), cuando el usuario pulse un checkbox este se aniadira a su base de datos y pondra el status en true, en caso de desmarcarla en false.


    1. Hacer consulta para sacar disease
    2. mandar a pintar los checkbox 
        2.1 Cuando se mande a pintar el checkbox identificar si esta en true o false para que se establezca, si esta en undefined, se pintara en falso. (el json tiene una propiedad llamada name este es el nombre con el que se guardara la propiedad en la base de datos)
  */}
  const [diseases, setDiseases] = useState({})
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  async function getData() {
    const response = await prodApi.get( '/personalInfo/self' );
    setDiseases( response.data.item.diseases );
    setData( response.data.item );
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [])
  


  async function saveOnDB () {
    const request = {...data, 'diseases': diseases}
    console.log(request);
    const response = await prodApi.post( '/personalinfo', request);
    console.log(response);
  }

  return {
    diseases,
    setDiseases,
    saveOnDB,
    loading
  }
}
