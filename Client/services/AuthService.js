
function getCurrentUser() {
    let idToken = null;
    try {
        idToken = localStorage.getItem("user");
    } catch (e){
        console.log(e);    
    }
    return idToken;
};

function setCurrentUser(jwtToken) {
    localStorage.setItem("user", jwtToken);
}

function logOut() {
    localStorage.removeItem("user");
    // window refresh
}

const AuthService = {
    getCurrentUser,
    setCurrentUser
}

export default AuthService;