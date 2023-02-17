import React, { useEffect } from "react";
import { View, Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import AuthService from '../services/AuthService';

WebBrowser.maybeCompleteAuthSession();

const AuthenticationScreen = () => {
    const [request, response, promptAsync] = Google.useAuthRequest({
        responseType: "id_token",
        webClientId: '109720273058-ailnd6jvmnst2ihfei9dqjbe9j4t4gih.apps.googleusercontent.com'
    });

    React.useEffect(() => {
        if (response?.type === 'success') {
            let idToken = response.params.id_token;
            AuthService.setCurrentUser(idToken);
            location.reload();
        }
    }, [response]);

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            disabled={!request}
            title="Login"
            onPress={() => {
                promptAsync({useProxy: false, showInRecents: true});
            }} />
    </View>
    );
}

export default AuthenticationScreen;