import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';

import LeaderboardService from '../service/LeaderboardsService';
import LeaderboardController from '../controllers/leaderboardController';

const leaderboardController = (): LeaderboardController => {
  const leaderboardService = new LeaderboardService(Teams, Matches);

  return new LeaderboardController(leaderboardService);
};

export default leaderboardController();
