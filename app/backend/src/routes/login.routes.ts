import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

const loginController = new UserController();

router.get('/validate', (req, res) => loginController.validateRole(req, res));
router.post('/', (req, res) => loginController.login(req, res));

export default router;
