async function validateJwtTokenInternal(headers, jwtDecode) {
        
    const tokenString =  headers['Authorization'];
    
    if (!tokenString)
        throw new Error("Empty ID token");
        
    const jwt = jwtDecode(tokenString);
    
    if (!jwt) { 
        console.log("Invalid token");
        throw new Error("Invalid token");
    }
    
    if (jwt.exp * 1000 < Date.now()) {
        console.log("Expired token");
        // throw new Error("Expired token");
    }
    
    return jwt.email;
}

export async function validateJwtToken(headers, jwtDecode) {
    try {
        return validateJwtTokenInternal(headers, jwtDecode);
    }
    catch(error) {
        throw new Error({message: '401'} );
    }
}

async function validateShareKey(shareKey, ddbDocClient, GetCommand, shareTableName) {
    console.log("ShareKey: " + shareKey);
    const command = new GetCommand({
        TableName: shareTableName,
        Key: { id: shareKey }
    });

    const response = await ddbDocClient.send(command);
    console.log(response);
    
    if (!response.Item) 
        throw new Error("The share key was not found on the DB.");
    
    console.log('sharekey email - ' + response.Item.email); 
    return response.Item.email;
}   

export async function validateAuthorization(headers, ddbDocClient, jwtDecode, GetCommand, shareTableName) {

    try {
        const authorization = headers['Authorization'];
        const shareKey = (authorization.indexOf('sharekey') != -1) ? 
            authorization.split('=')[1] : null;
        
        return shareKey ? 
            validateShareKey(shareKey, ddbDocClient, GetCommand, shareTableName) :
            validateJwtToken(headers, jwtDecode);
    }
    catch(error) {
        console.log(error);
        throw new Error('401', error);
    }
  }