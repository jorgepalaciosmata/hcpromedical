const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

exports.handler = async event => {

    try {
    console.log(JSON.stringify(event, undefined, 2));

    var email = null;
    try {
      email = validateAuthorization(event.headers['Authorization']);
    } catch (e) {
      console.log(e);
      return sendResponse(401, 'The authorization token is missing or expired.');
    }
    
    const id = getUserId(event.pathParameters.id, email);

    console.log(`Getting item with ID '${id}' from table '${process.env.TABLE_NAME}'`);

    const command = new GetCommand({
      TableName: process.env.TABLE_NAME,
      Key: { id }
    });

    const response = await ddbDocClient.send(command);

    if (response.Item) {
      console.log(`Retrieved item '${id}' with attributes ${JSON.stringify(response.Item)}`);

      return sendResponse(200, JSON.stringify({
          item: response.Item
        }));
    } else {
      console.log(`No item found with id '${id}'`);

      return {
        statusCode: 404,
        body: "Item not found"
      };
    }
  } catch (err) {
    console.error(`Failed to get item: ${err.message} (${err.constructor.name})`);

    return {
      statusCode: 500,
      body: "Internal Service Error"
    };
  }
};

const sendResponse = (status, body) => {
    var response = {
        statusCode: status,
        headers: {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods" : "OPTIONS,POST",
            "Access-Control-Allow-Credentials" : true,
            "Access-Control-Allow-Origin" : "*",
            "X-Requested-With" : "*"
        },
        body: body
    };
    return response;
};

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function validateAuthorization(tokenString) {
  var jwt = parseJwt(tokenString);
  
  console.log(jwt.exp);
  console.log(Date.now());
  
  if (jwt.exp * 1000 < Date.now()) {
    throw new Error("Expired token");
  }
  
  return jwt.email;
}

function getUserId(pathId, email) {
  return (pathId && pathId !== 'self') ? 
    pathId : 
    email;
}