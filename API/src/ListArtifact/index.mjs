
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
import { jwtDecode } from './helpers/jwtDecode/index.js';
import { sendResponse } from './helpers/sendResponse/index.js';
import { validateAuthorization } from './helpers/validateAuthorization/index.js';

export const handler = async event => {
    try {
        
        const ddbDocClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));
        const shareTableName = "hcpromedical-api-ShareTable-1KV3O3289BT55";
        const email =  await validateAuthorization(event.headers, ddbDocClient, jwtDecode, GetCommand, shareTableName);   

        const bucket = 'serverlessrepo-emailprocessi-updatedemails3bucket-zd3s6yyqzut5';
        
        let response = [];
        const client = new S3Client();
        var input = {
            Bucket: bucket, 
            Prefix: email + '/'
        };
        const command = new ListObjectsCommand(input);
        response = await client.send(command);
        return sendResponse(200, JSON.stringify(formatResponse(response.Contents)));
        
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

function formatResponse(contents) {
  let response = [];
  for (let i = 0; i < contents.length; i++) {
    response.push({
      name: getDocumentName(contents[i].Key),
      created: contents[i].LastModified
    });
  }
  return response;
}

function getDocumentName(key) {
    return key.substring(key.indexOf('/') + 1, key.length);
}