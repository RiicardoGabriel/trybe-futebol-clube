import { Router } from 'express';
import MatchesController from '../controllers/matchesController';

const router = Router();

const matchController = new MatchesController();

router.get('/', (req, res) => matchController.getMatches(req, res));

export default router;
