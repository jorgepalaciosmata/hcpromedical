import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import { createClient } from 'redis';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async event => {

    try {
      var email = null;
      
      try {
        email = await validateAuthorization(event.headers);
      } catch (e) {
        console.log(e);
        return sendResponse(401, 'The authorization token is missing or expired.');
      }
    
      const id = email;
      console.log(`Getting item with ID '${id}' from table '${process.env.TABLE_NAME}'`);

      const command = new GetCommand({
        TableName: process.env.TABLE_NAME,
        Key: { id }
      });

      const response = await ddbDocClient.send(command);

      if (response.Item) {
        console.log(`Retrieved item '${id}' with attributes ${JSON.stringify(response.Item)}`);

        return sendResponse(200, JSON.stringify({
          item: response.Item
        }));
      } 
      
      console.log(`No item found with id '${id}'`);
      return sendResponse(404, "Item not found");

  } catch (error) {
    console.error(`Failed to get item: ${error.message} (${error.constructor.name})`);

    return {
      statusCode: 500,
      body: "Internal Service Error"
    };
  }
};

// ------------------------------------------
// Helper Functions
// ------------------------------------------

const sendResponse = (status, body) => {
    var response = {
        statusCode: status,
        headers: {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods" : "OPTIONS,POST,GET",
            "Access-Control-Allow-Credentials" : true,
            "Access-Control-Allow-Origin" : "*",
            "X-Requested-With" : "*"
        },
        body: body
    };
    return response;
};

async function validateAuthorization(headers) {
  let email = '';
  
  const authorization = headers['Authorization'];
  
  const shareKey = (authorization.indexOf('sharekey') != -1) ? 
    authorization.split('=')[1] : 
    null;
    
  const tokenString = (authorization.indexOf('sharekey') == -1) ?
    authorization : null;    
  
  // Validate whether the user has a share key
  if (shareKey) {
    console.log("ShareKey: " + shareKey);
    
     // REDIS Client initialization
    const client = createClient({
      socket: {
        host: 'hcpromedical-redis.vpko5l.ng.0001.use1.cache.amazonaws.com'
      }
    });
    client.on('error', err => console.log('Redis Client Error', err));
    await client.connect();
    let val = await client.get(shareKey);
    console.log('redis value: ' + val);
    return val;
  }
  
  if (!tokenString)
    throw new Error("Empty ID token");
  
  const jwt = jwtDecode(tokenString);
  
  if (jwt) {
    if (jwt.exp * 1000 < Date.now()) {
      // throw new Error("Expired token");
      console.log('expired token');
    }
    email = jwt.email;
  }
  
  return email;
}

function getUserId(pathId, email) {
  return (pathId && pathId !== 'self') ? 
    pathId : 
    email;
}

// ----------------------
// JWT DECODE
// ----------------------

  /**
   * The code was extracted from:
   * https://github.com/davidchambers/Base64.js
   */

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  function InvalidCharacterError(message) {
      this.message = message;
  }

  InvalidCharacterError.prototype = new Error();
  InvalidCharacterError.prototype.name = "InvalidCharacterError";

  function polyfill(input) {
      var str = String(input).replace(/=+$/, "");
      if (str.length % 4 == 1) {
          throw new InvalidCharacterError(
              "'atob' failed: The string to be decoded is not correctly encoded."
          );
      }
      for (
          // initialize result and counters
          var bc = 0, bs, buffer, idx = 0, output = "";
          // get next character
          (buffer = str.charAt(idx++));
          // character found in table? initialize bit storage and add its ascii value;
          ~buffer &&
          ((bs = bc % 4 ? bs * 64 + buffer : buffer),
              // and if not first of each 4 characters,
              // convert the first 8 bits to one ascii character
              bc++ % 4) ?
          (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6)))) :
          0
      ) {
          // try to find character in table (0-63, not found => -1)
          buffer = chars.indexOf(buffer);
      }
      return output;
  }

  var atob = (typeof window !== "undefined" &&
      window.atob &&
      window.atob.bind(window)) ||
  polyfill;

  function b64DecodeUnicode(str) {
      return decodeURIComponent(
          atob(str).replace(/(.)/g, function(m, p) {
              var code = p.charCodeAt(0).toString(16).toUpperCase();
              if (code.length < 2) {
                  code = "0" + code;
              }
              return "%" + code;
          })
      );
  }

  function base64_url_decode(str) {
      var output = str.replace(/-/g, "+").replace(/_/g, "/");
      switch (output.length % 4) {
          case 0:
              break;
          case 2:
              output += "==";
              break;
          case 3:
              output += "=";
              break;
          default:
              throw new Error("base64 string is not of the correct length");
      }

      try {
          return b64DecodeUnicode(output);
      } catch (err) {
          return atob(output);
      }
  }

  function InvalidTokenError(message) {
      this.message = message;
  }

  InvalidTokenError.prototype = new Error();
  InvalidTokenError.prototype.name = "InvalidTokenError";

  function jwtDecode(token, options) {
      if (typeof token !== "string") {
          throw new InvalidTokenError("Invalid token specified: must be a string");
      }

      options = options || {};
      var pos = options.header === true ? 0 : 1;

      var part = token.split(".")[pos];
      if (typeof part !== "string") {
          throw new InvalidTokenError("Invalid token specified: missing part #" + (pos + 1));
      }

      try {
          var decoded = base64_url_decode(part);
      } catch (e) {
          throw new InvalidTokenError("Invalid token specified: invalid base64 for part #" + (pos + 1) + ' (' + e.message + ')');
      }

      try {
          return JSON.parse(decoded);
      } catch (e) {
          throw new InvalidTokenError("Invalid token specified: invalid json for part #" + (pos + 1) + ' (' + e.message + ')');
      }
  }