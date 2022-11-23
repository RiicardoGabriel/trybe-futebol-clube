import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';

export default class MatchesController {
  service = new MatchesService();

  public getMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    if (inProgress === 'true' || inProgress === 'false') {
      const toBool = JSON.parse(inProgress.toLowerCase());
      const result = await this.service.getMatches(toBool);
      return res.status(200).json(result);
    }
    const result = await this.service.getAllMatches();
    return res.status(200).json(result);
  };

  public postMatch = async (req: Request, res: Response) => {
    const request = req.body;
    const { authorization } = req.headers;
    const result = await this.service.postMatch(request, authorization || '');
    if (result === 404) {
      return res.status(404).json({
        message: 'There is no team with such id!' });
    }
    if (result === 422) {
      return res.status(422).json({
        message: 'It is not possible to create a match with two equal teams' });
    }
    if (result === 401) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    return res.status(201).json(result);
  };

  public patchMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.service.patchMatch(id);
    return res.status(200).json({ message: 'Finished' });
  };
}
