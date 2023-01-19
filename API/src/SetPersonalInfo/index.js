const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand, PutCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

exports.handler = async event => {

    try {
    
      const id = JSON.parse(event.body).id;

      const command = new PutCommand({
        TableName: process.env.TABLE_NAME,
        Item: {
          "id": id,
          "test": "test test"
        }
      });

      const response = await ddbDocClient.send(command);
      console.log(response);
    
      return sendRes(200, '{ "error": false, "message": "' + id + '" }');
   
  } catch (err) {
    console.error(`Failed to get item: ${err.message} (${err.constructor.name})`);

    return {
      statusCode: 500,
      body: err.message
    };
  }
};

const sendRes = (status, body) => {
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
