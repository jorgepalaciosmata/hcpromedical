import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { jwtDecode } from './helpers/jwtDecode.mjs';
import { sendResponse } from './helpers/sendResponse.mjs';
import { validateJwtToken } from './helpers/validateAuthorization.mjs';

export const handler = async (event) => {
  
  try {
    
    const email = await validateJwtToken(event.headers, jwtDecode);
    const shareKey = event.requestContext.requestId;
    await SetShareKey(shareKey, email, process.env.TABLE_NAME);
    return sendResponse(200, shareKey);
    
  } catch (error) {
    
    switch(error.message) {
      case '401': 
        return sendResponse(401, "Unauthorized");
      case '404':
          return sendResponse(404, "Item not found");
      default:
        console.error(error);
        return sendResponse(500, error);
    }
  }
  
  async function SetShareKey(shareKey, email, shareTableName) {
    console.log('Email: ' + email + ', shareKey: ' + shareKey);
    
    const ddbDocClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));
    const TTL_DELTA = 60; // seconds
    const data = {
      id: shareKey,
      email: email,
      expiration: Math.floor(+ new Date() / 1000) + TTL_DELTA
    }
    
    const command = new PutCommand({
      TableName: shareTableName,
      Item: data,
    });

    const response = await ddbDocClient.send(command);
    console.log("SetShareKey success. Response: " + response);
  }
};
