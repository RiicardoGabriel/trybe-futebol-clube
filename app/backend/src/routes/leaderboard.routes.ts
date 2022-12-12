import { Router } from 'express';

import leaderboardController from '../utils/leaderboardControllerUtil';

const router = Router();

router.get('/home', leaderboardController.findAllHome);

export default router;
