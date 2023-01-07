const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand, PutCommand } = require("@aws-sdk/lib-dynamodb");

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

    const command = new PutCommand({
      TableName: process.env.TABLE_NAME,
      Item: {
        "id": id,
        "test": "test_val"
      }
    });

    const response = await ddbDocClient.send(command);
    console.log(response);
    
    /*
    2023-01-07T20:23:05.023Z	22ab1c58-fb83-46a9-b299-76b71e3492e9	INFO	{
  '$metadata': {
    httpStatusCode: 200,
    requestId: 'L8C0V134L2RIU45992KNVC69DNVV4KQNSO5AEMVJF66Q9ASUAAJG',
    extendedRequestId: undefined,
    cfId: undefined,
    attempts: 1,
    totalRetryDelay: 0
  },
  Attributes: undefined,
  ConsumedCapacity: undefined,
  ItemCollectionMetrics: undefined
}
    */
  } catch (err) {
    console.error(`Failed to get item: ${err.message} (${err.constructor.name})`);

    return {
      statusCode: 500,
      body: "Internal Service Error"
    };
  }
  
  
};
