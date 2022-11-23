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
}
