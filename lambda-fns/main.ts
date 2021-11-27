import createReward from './createReward';
import deleteReward from './deleteReward';
import getRewardById from './getRewardById';
import listRewards from './listRewards';
import updateReward from './updateReward';
import Reward from './Reward';
import CreateUniversityInput from './CreateUniversityInput';
import createUniversity from './createUniversity';

type AppSyncEvent = {
  info: {
    fieldName: string
  },
  arguments: {
    rewardId: string,
    reward: Reward,
    university: CreateUniversityInput
  }
}

exports.handler = async (event: AppSyncEvent) => {
  switch (event.info.fieldName) {
    case "getRewardById":
      return await getRewardById(event.arguments.rewardId);
    case "createReward":
      return await createReward(event.arguments.reward);
    case "createUniversity":
      return await createUniversity(event.arguments.university);
    case "listRewards":
      return await listRewards();
    case "deleteReward":
      return await deleteReward(event.arguments.rewardId);
    case "updateReward":
      return await updateReward(event.arguments.reward);
    default:
      return null;
  }
}
