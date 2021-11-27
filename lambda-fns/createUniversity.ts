const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
import CreateUniversityInput from './CreateUniversityInput';

async function createUniversity(university: CreateUniversityInput) {
  const params = {
    TableName: process.env.UNIVERSITYS_TABLE,
    Item: university
  }
  try {
    await docClient.put(params).promise();
    return university;
  } catch (err) {
    console.log('DynamoDB error: ', err);
    return null;
  }
}

export default createUniversity;
