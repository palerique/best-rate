const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
import Reward from './Reward';

async function createReward(reward: Reward) {
  const params = {
    TableName: process.env.REWARDS_TABLE,
    Item: reward
  }
  try {
    await docClient.put(params).promise();
    return reward;
  } catch (err) {
    console.log('DynamoDB error: ', err);
    return null;
  }
}

export default createReward;
