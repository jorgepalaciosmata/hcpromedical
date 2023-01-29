
console.log('Loading function');
const aws = require("aws-sdk");
const s3 = new aws.S3({ apiVersion: '2006-03-01', signatureVersion: 'v4' });

exports.handler = async event => {
  // Log the event argument for debugging and for use in local development.
  console.log(JSON.stringify(event, undefined, 2));
  const bucket = process.env.BUCKET_NAME;
  const key = event.pathParameters.id;

  try {
    var params = {
      Bucket: process.env.BUCKET_NAME,
      Key: event.pathParameters.id,
      Expires: 120 // In seconds
    };

    const readSignedUrl = await 
      s3.getSignedUrlPromise('getObject', params); // Read access
    
    return readSignedUrl;
  } catch (err) {
      console.log(err);
      const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
      console.log(message);
      throw new Error(message);
  }
};
