
console.log('Loading function');

const aws = require("aws-sdk");

const s3 = new aws.S3({ apiVersion: '2006-03-01' });

exports.handler = async event => {
  // Log the event argument for debugging and for use in local development.
  console.log(JSON.stringify(event, undefined, 2));

  const bucket = process.env.BUCKET_NAME;
  const key = event.pathParameters.id;
  const params = {
      Bucket: bucket,
      Key: key,
  };
  try {
      //const { ContentType } = await s3.getObject(params).promise();
      //console.log('CONTENT TYPE:', ContentType);
      //return ContentType;
      
      const data = await s3.getObject(params).promise();
      return data.Body.toString('utf-8');
  } catch (err) {
      console.log(err);
      const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
      console.log(message);
      throw new Error(message);
  }
};
