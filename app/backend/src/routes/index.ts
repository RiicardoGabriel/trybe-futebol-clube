import { Router } from 'express';
import Login from './login.routes';

const router = Router();

router.use('/login', Login);

export default router;
