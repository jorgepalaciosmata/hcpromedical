import React, { useEffect } from "react";
import { useState } from "react";
import { View, Button , TextInput, ScrollView, StyleSheet, Text } from 'react-native';
const axios = require("axios").default;

const HistorialMedicoScreen = ({ navigation, route }) => {

  const [isInit, setIsInit] = useState(false);
  const [url, setUrl] = useState("");

  async function getData() {
    await axios
      .get(
        "https://p8ada5o8e0.execute-api.us-east-1.amazonaws.com/Prod/artifact",
        {
          params: { id: '51/road.pdf'   }
        }
      )
      .then(function ({ data }) {
        alert(data);
        setIsInit(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  useEffect(() => {
    alert(route.params.name);
    if (!isInit) {
      getData();
    }
  }, []);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Historial</Text>
      <iframe height="100%" width="100%" 
        src="https://hcpromedical-api-hcpromedi-393663602081.s3.amazonaws.com/51/road.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAVXKBN3WQ4TXBXG4B%2F20230130%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230130T015609Z&X-Amz-Expires=120&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLWVhc3QtMSJGMEQCIQCPBn%2FJn54Fm%2Br4zyiComQx95bcrhS0aG1ES%2BNOsmd3HwIfFmeKxsOaPBrcxSXjk1lWAV%2BpGXcMXxXMJ5SOK4D1HyqwAwiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM5MzY2MzYwMjA4MSIMZIFcYmLExn5gWC2RKoQD%2FsAsDqqiSUW6qCHDtzoUazAjorlGDuG91R8lORHWMpGeqktLozn9rlrkli%2FFIdq7V%2B19enK17kbK2RehJqKsaVK%2F%2Falxu6vPJu7L8o5Y%2FBdqqhLCi89RteGi%2Bcr3PpOrJfTU5vnN3ia7SsPaNE9BywGSBYtVdFQVaR1U06jTDy0S%2FxRV1%2FfelrbdIW6An%2BSNtF0Xn40brDJV3lcjw0%2F6ItJaEWpgKAyccGjFkHixHJCtqFPG5Pf7x%2B3fytfce6IE8siG5GlIoglRTyS4kzSVNqxae93RiZgRODw2mGoOiOWXRJuNk0vL%2BTZGy2iqIkQdQAoGUwxxu0nQkcXTdIIHMzuuHEK4Y9MAjR37IG5J4FazAYprSj6nNHZqcDEeSjuQglS04%2BTyvKgUIs6MuDjoJgHp52ih5%2BLzW2Zf9zqFpUFXCRBa1rIO6QU%2B%2FNVcVFjXYM20F69zMUFwc9xLK%2FHafuD9gr76m0CTsK0rT2I8U%2FGqNYNx%2FCSQzpFgsswSKSM3WQViRjC5x9yeBjqeAcNXxa2Ww%2BG2Aa4SDXtnhpZ0ClkJtdGaEfVUJ%2BRdjwzZLdzKppy3eF2yACaPAF8cKfctHi29p6IjQ9RLwcU3qXdL9V87EjGAwTKvQa970J9ff7ytUGpl8VUuzCis30LJfT78uzux%2F%2FNJavA%2Bf8mM7KtRbZm85FQN2F6aZlsSSldhqmGSKuFIUopicncA5Rl5yK1UbszCu9GuWp4N10m2&X-Amz-Signature=142ce6764db28518947bcc848bb54834c8266ba05cfb89a7ec2e57e6c2feedc1&X-Amz-SignedHeaders=host"/>
    </View>
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
  }
})

export default HistorialMedicoScreen;