
import jwt_decode from 'jwt-decode';

const userItemKey = "user";

function getCurrentUser() {
    let idToken = null;
    try {
        idToken = localStorage.getItem(userItemKey);
    } catch (e){
        console.log(e);    
    }
    return idToken;
};

function getCurrentUserToken() {
    return jwt_decode(getCurrentUser());
}

function setCurrentUser(jwtToken) {
    localStorage.setItem(userItemKey, jwtToken);
}

function logOut() {
    localStorage.removeItem("user");
    location.replace(location.hostname);
}

const AuthService = {
    getCurrentUser,
    setCurrentUser,
    getCurrentUserToken,
    logOut
}

export default AuthService;