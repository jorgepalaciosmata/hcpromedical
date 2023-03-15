import { useEffect, useState } from "react";
import { prodApi } from "../api/prodApi";
import AuthService from '../services/AuthService';

export const useForm = ( ) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  
  async function getData() {
    const response = await prodApi.get( '/personalInfo/self', {
      headers: {
        "Authorization": AuthService.getCurrentUser()
      }
    }).catch(function (error) {
      if (error.response.status === 401) {
          AuthService.logOut();
      }
    });
    setData( response.data.item );
    setLoading(false);
    console.log( response );
  }

  useEffect(() => {
      getData();
  }, []);

  async function updateData( ) {   
    const response = await prodApi.post( '/personalinfo', data);
    console.log(response); 
  }

  return {
    data,
    setData,
    updateData,
    loading
  }
}
