const aws = require("aws-sdk");
const s3 = new aws.S3({ apiVersion: '2006-03-01', signatureVersion: 'v4' });

exports.handler = async event => {
  const bucket = process.env.BUCKET_NAME;
  
  var params = {
    Bucket: bucket, 
    Prefix: '51/'  // Can be your folder name
  };
  
  try {
    
    const results = await s3.listObjectsV2(params).promise().then(data => { //LINE 693
        return data;
    }).catch(function (err) {
        console.warn('Not exist folder exception is not catch here!', err );
        return false;
    });
    return results;
    } catch (e) {
        console.warn('Error listing meta directory ', e); //<-- I can catch here only
    }
  
  
};
