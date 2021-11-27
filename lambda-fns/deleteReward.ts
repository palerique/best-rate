const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

async function deleteReward(rewardId: string) {
  const params = {
    TableName: process.env.REWARDS_TABLE,
    Key: {
      id: rewardId
    }
  }
  try {
    await docClient.delete(params).promise()
    return rewardId
  } catch (err) {
    console.log('DynamoDB error: ', err)
    return null
  }
}

export default deleteReward;
