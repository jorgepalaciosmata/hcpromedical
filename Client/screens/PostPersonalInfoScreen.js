import React from 'react';
import { useState } from 'react';
import { View, Button , TextInput, ScrollView, StyleSheet, Text } from 'react-native';
const axios = require('axios').default;

const PostPersonalInfoScreen = ({navigation}) => {

    const [user, setUser] = useState({
        id:"", //I need to fix this problem later!
        name: "",
        lastName: "",
        phone: "",
    })

    const handleChangeText = (name , value) => {
        setUser({...user, [name]:value});
    }

    async function submmitHandler( ) {
        
        await axios.post( 'https://p8ada5o8e0.execute-api.us-east-1.amazonaws.com/Prod/personalinf', user)
          .then(function (response) {
            // handle success
            console.log(response);
            navigation.navigate('HC Cloud')
          }).catch(function (error) {
            // handle error
            console.log(error);
          }).then(function () {
            // always executed
            console.log(user)
          });
          
    }

    return (  
        <ScrollView style={styles.container}>
            <View style={styles.inputStyle}>
                <TextInput 
                placeholder='Name'
                onChangeText={(value) => handleChangeText('name',value)}/>
            </View>
            <View style={styles.inputStyle}>
                <TextInput 
                placeholder='Last Name'
                onChangeText={(value) => handleChangeText('lastName',value)}/>
            </View>
            <View style={styles.inputStyle}>
                <TextInput 
                placeholder='Phone Number'
                onChangeText={(value) => handleChangeText('phone',value)}/>
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