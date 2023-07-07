import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { jwtDecode } from './helpers/jwtDecode/index.js';
import { sendResponse } from './helpers/sendResponse/index.js';
import { validateAuthorization } from './helpers/validateAuthorization/index.js';

export const handler = async event => {
  try {
    
    const ddbDocClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));
    const shareTableName = "hcpromedical-api-ShareTable-1KV3O3289BT55";
    const email =  await validateAuthorization(event.headers, ddbDocClient, jwtDecode, GetCommand, shareTableName);
    
    const client = new S3Client();
    
    var getObjectParams = {
      Bucket: 'serverlessrepo-emailprocessi-updatedemails3bucket-zd3s6yyqzut5', 
      Key: email + '/' + event.queryStringParameters.id,
      Expires: 120 // In seconds
    };
    
    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(client, command, { expiresIn: 3600 });
    return sendResponse(200, url);
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
};