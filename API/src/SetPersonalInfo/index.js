const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand, PutCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

exports.handler = async event => {

    var email = null;
    
    try {
      email = validateAuthorization(event.headers['Authorization']);
      console.log(email);
    } catch (e) {
      console.log(e);
      return sendResponse(401, 'The authorization token is missing or expired.');
    }

    try {
      const id = JSON.parse(event.body).id;
      const command = new PutCommand({
        TableName: process.env.TABLE_NAME,
        Item: JSON.parse(event.body)
      });

      const response = await ddbDocClient.send(command);
      console.log(response);
    
      return sendResponse(200, '{ "error": false, "message": "' + id + '" }');
   
  } catch (err) {
    console.error(`Failed to get item: ${err.message} (${err.constructor.name})`);

    return {
      statusCode: 500,
      body: err.message
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
  return jwt.email;
}