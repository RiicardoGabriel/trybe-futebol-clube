import { Router } from 'express';

import leaderboardController from '../utils/leaderboardControllerUtil';

const router = Router();

router.get('/', leaderboardController.findLeaderboard);
router.get('/home', leaderboardController.findAllHome);
router.get('/away', leaderboardController.findAllAway);

export default router;
