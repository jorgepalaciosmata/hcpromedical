import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { jwtDecode } from './helpers/jwtDecode.mjs';
import { sendResponse } from './helpers/sendResponse.mjs';
import { validateJwtToken } from './helpers/validateAuthorization.mjs';

export const handler = async event => {

    try {

        const ddbDocClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));
        const personalInfoTableName = process.env.TABLE_NAME;
        const email =  await validateJwtToken(event.headers, jwtDecode);
        let data = JSON.parse(event.body);
        data.id = email;
        await setRecord(email, ddbDocClient, personalInfoTableName, data);
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

    async function setRecord(email, ddbDocClient, personalInfoTableName, data) {
        console.log(`Setting item with ID '${email}' into table '${process.env.TABLE_NAME}'`);
    
        const command = new PutCommand({
            TableName: personalInfoTableName,
            Item: data,
        });

        const response = await ddbDocClient.send(command);
        console.log(response);
        console.log('Success!');
      }
}