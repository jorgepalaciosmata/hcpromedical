
function getCurrentUser() {
    let idToken = null;
    try {
        idToken = localStorage.getItem("user");
    } catch (e){
        console.log(e);    
    }
    return idToken;
};

function getCurrentUserToken() {
    return parseJwt(getCurrentUser());
}

function setCurrentUser(jwtToken) {
    localStorage.setItem("user", jwtToken);
}

function logOut() {
    localStorage.removeItem("user");
    // window refresh
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

const AuthService = {
    getCurrentUser,
    setCurrentUser,
    getCurrentUserToken,
    logOut
}

export default AuthService;