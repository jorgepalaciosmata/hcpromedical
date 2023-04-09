import { useEffect, useState } from "react";
import { prodApi } from "../api/prodApi";
import AuthService from '../services/AuthService';

export const useForm = ( ) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
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
