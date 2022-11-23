import { Router } from 'express';
import Login from './login.routes';
import Teams from './teams.routes';
import Matches from './matches.routes';

const router = Router();

router.use('/login', Login);
router.use('/teams', Teams);
router.use('/matches', Matches);

export default router;
