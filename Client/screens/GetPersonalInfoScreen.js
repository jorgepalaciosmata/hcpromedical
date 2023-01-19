import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const GetPersonalInfoScreen = () => {

  const [data, setData] = useState([])

  async function getData () {
    await axios.get('https://p8ada5o8e0.execute-api.us-east-1.amazonaws.com/Prod/personalInfo/')
   .then({data} = setData(data))
   .catch(function (error) {
     // handle error
     console.log(error);
   })
   .then(function () {
     // always executed
   });
  }

  useEffect(() => {
    getData();
  }, []);
  

  
  return (  
    <View>
        {data.map((user) => {
                    return <Text>{user.name}</Text>;
                  })}
    </View> )
 
};

export default GetPersonalInfoScreen;