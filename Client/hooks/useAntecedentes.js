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

  async function getData() {
    const response = await prodApi.get( '/personalInfo/50' );
    setDiseases( response.data.item.diseases );
  }

  useEffect(() => {
    getData();
  }, [])
  
  const updateDiseases = (name, value) => {
		setDiseases({...diseases, [name]:value});
	}

  return {
    diseases,
    updateDiseases
  }
}
