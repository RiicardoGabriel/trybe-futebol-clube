import { Router } from 'express';
import MatchesController from '../controllers/matchesController';

const router = Router();

const matchController = new MatchesController();

router.post('/', (req, res) => matchController.postMatch(req, res));
router.patch('/:id/finish', (req, res) => matchController.patchMatch(req, res));
router.get('/', (req, res) => matchController.getMatches(req, res));

export default router;
