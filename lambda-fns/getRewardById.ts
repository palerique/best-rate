const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

async function getRewardById(rewardId: string) {
  const params = {
    TableName: process.env.REWARDS_TABLE,
    Key: { id: rewardId }
  }
  try {
    const { Item } = await docClient.get(params).promise()
    return Item
  } catch (err) {
    console.log('DynamoDB error: ', err)
  }
}

export default getRewardById
