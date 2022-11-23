import { Router } from 'express';
import Login from './login.routes';
import Teams from './teams.routes';

const router = Router();

router.use('/login', Login);
router.use('/teams', Teams);

export default router;
