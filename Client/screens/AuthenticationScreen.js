import React, { useEffect } from "react";
import { View, Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const AuthenticationScreen = () => {
    let accessToken = '';

    async function GetUserData() {
        let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: { Authorization: `Bearer ${accessToken}`}
        });

        userInfoResponse.json().then(data => {
            alert(data.email);
        });
    }
    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: '109720273058-ailnd6jvmnst2ihfei9dqjbe9j4t4gih.apps.googleusercontent.com'
    });

    React.useEffect(() => {
    if (response?.type === 'success') {
        const { authentication } = response;
        accessToken = authentication.accessToken;
    }
    }, [response]);

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
        disabled={!request}
        title="Login"
        onPress={() => {
            promptAsync({useProxy: false, showInRecents: true});
        }}
        />
        <Button title="GetUserInfo" onPress={() => {
            GetUserData();
        }} />
    </View>
    );
}

export default AuthenticationScreen;