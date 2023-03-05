from email.message import Message
from botocore.exceptions import ClientError
import boto3
import email
import os
import uuid
import json

workmail_message_flow = boto3.client('workmailmessageflow')
s3 = boto3.client('s3')

def lambda_handler(event, context):
    print(event)
    from_address = event['envelope']['mailFrom']['address']
    subject = event['subject']
    flow_direction = event['flowDirection']
    message_id = event['messageId']
    print(f"Received email with message ID {message_id}, flowDirection {flow_direction}, from {from_address} with Subject {subject}")

    try:
        raw_msg = workmail_message_flow.get_raw_message_content(messageId=message_id)
        parsed_msg: Message = email.message_from_bytes(raw_msg['messageContent'].read())
        updated_email_bucket_name = 'serverlessrepo-emailprocessi-updatedemails3bucket-zd3s6yyqzut5'
        
        if (len(parsed_msg.get_payload()) > 0):
            for attachment in parsed_msg.get_payload():
                if (attachment.get_content_type() == "application/pdf"):
                    key = from_address + "/" + str(uuid.uuid4()) + ".pdf"
                    s3.put_object(Body=attachment.get_payload(decode=True), Bucket=updated_email_bucket_name, Key=key)

        
    except ClientError as e:
        if e.response['Error']['Code'] == 'MessageFrozen':
            # Redirect emails are not eligible for update, handle it gracefully.
            print(f"Message {message_id} is not eligible for update. This is usually the case for a redirected email")
        else:
            # Send some context about this error to Lambda Logs
            print(e)
            if e.response['Error']['Code'] == 'ResourceNotFoundException':
                print(f"Message {message_id} does not exist. Messages in transit are no longer accessible after 1 day")
            elif e.response['Error']['Code'] == 'InvalidContentLocation':
                print('WorkMail could not access the updated email content. See https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html')
            raise(e)

    return {
        'actions': [
            {
                'allRecipients': True,  # For all recipients
                'action': {'type': 'DEFAULT'}  # let the email be sent normally
            }
        ]
    }
