import { jwtDecode } from './helpers/jwtDecode/index.js';
import { sendResponse } from './helpers/sendResponse/index.js';
import { validateJwtToken } from './helpers/validateAuthorization/index.js'
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

export const handler = async event => {
    
    try {
        const email = await validateJwtToken(event.headers, jwtDecode);
        const client = new S3Client();
        const input = { 
          Bucket: 'serverlessrepo-emailprocessi-updatedemails3bucket-zd3s6yyqzut5',
          Key: email + event.queryStringParameters.id
        };
        const command = new DeleteObjectCommand(input);
        const response = await client.send(command);
    
        console.log(response);
        return sendResponse(200, "success");
    
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
