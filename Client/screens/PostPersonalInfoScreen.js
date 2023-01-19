import React from 'react';
import { useState } from 'react';
import { View, Button , TextInput, ScrollView, StyleSheet, Text } from 'react-native';
const axios = require('axios').default;

const PostPersonalInfoScreen = ({navigation}) => {

    
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    // Handlers onChangeText
    const hName = (value) => setName(value);
    const hLastName = (value) => setLastName(value);
    const hPhone = (value) => setPhone(value);

    async function submmitHandler( ) {
        const userData = {
            name: name,
            lastName: lastName,
            phone: phone
        }

        await axios.post( 'https://p8ada5o8e0.execute-api.us-east-1.amazonaws.com/Prod/personalinfo', userData)
          .then(function (response) {
            // handle success
            console.log(response);
            navigation.navigate('HC Cloud')
          }).catch(function (error) {
            // handle error
            console.log(error);
          }).then(function () {
            // always executed
            console.log(userData)
          });
          
    }

    return (  
        <ScrollView style={styles.container}>
            <View style={styles.inputStyle}>
                <TextInput 
                placeholder='Name'
                onChangeText={(value) => hName(value)}/>
            </View>
            <View style={styles.inputStyle}>
                <TextInput 
                placeholder='Last Name'
                onChangeText={(value) => hLastName(value)}/>
            </View>
            <View style={styles.inputStyle}>
                <TextInput 
                placeholder='Phone Number'
                onChangeText={(value) => hPhone(value)}/>
            </View>
            <View style={styles.inputStyle}>
                <Button 
                title='Save'
                onPress={submmitHandler} />
            </View>
        </ScrollView>
    )
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

export default PostPersonalInfoScreen;