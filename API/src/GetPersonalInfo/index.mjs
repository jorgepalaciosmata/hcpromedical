import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import { jwtDecode } from './helpers/jwtDecode/index.js';
import { sendResponse } from './helpers/sendResponse/index.js';
import { validateAuthorization } from './helpers/validateAuthorization/index.js'

/*
  Table mappings
  -----------------------------
  process.env.TABLE_NAME    - hcpromedical-api-PersonalInfoTable-18ZB6173LHDAW
  process.env.TABLE_NAME_2  - hcpromedical-api-ShareTable-1KV3O3289BT55
*/

export const handler = async event => {

  try {
    
      const ddbDocClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));
      const personalInfoTableName = process.env.TABLE_NAME;
      const shareTableName = process.env.TABLE_NAME_2;
      const email =  await validateAuthorization(event.headers, ddbDocClient, jwtDecode, GetCommand, shareTableName);   
      const record = await getRecord(email, ddbDocClient, personalInfoTableName);
      return sendResponse(200, JSON.stringify({ item: record }));

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

  async function getRecord(email, ddbDocClient, personalInfoTableName) {
    console.log(`Getting item with ID '${email}' from table '${process.env.TABLE_NAME}'`);

    const command = new GetCommand({
      TableName: personalInfoTableName,
      Key: { id: email }
    });

    let response = await ddbDocClient.send(command);
    
    if (!response.Item) {
      console.log(`The item with ID '${email}' was not found on the DB.`); 
      throw new Error('404');
    }
    
    console.log(`Retrieved item '${email}' with attributes ${JSON.stringify(response.Item)}`);
    return response.Item;
  }
};