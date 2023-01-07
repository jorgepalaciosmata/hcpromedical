const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

exports.handler = async event => {
  // Log the event argument for debugging and for use in local development.
  // console.log(JSON.stringify(event, undefined, 2));

    try {
    // Log the event argument for debugging and for use in local development.
    console.log(JSON.stringify(event, undefined, 2));

    const id = event.pathParameters.id;

    console.log(`Getting item with ID '${id}' from table '${process.env.TABLE_NAME}'`);

    const command = new GetCommand({
      TableName: process.env.TABLE_NAME,
      Key: { id }
    });

    const response = await ddbDocClient.send(command);

    if (response.Item) {
      console.log(`Retrieved item '${id}' with attributes ${JSON.stringify(response.Item)}`);

      return {
        statusCode: 200,
        body: JSON.stringify({
          item: response.Item
        })
      };
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
