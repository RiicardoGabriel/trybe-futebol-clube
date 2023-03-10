import { Request, Response } from 'express';
import ILeaderboardService from '../interfaces/services/ILeaderboardService';

export default class LeaderboardController {
  constructor(private service: ILeaderboardService) {}

  public findAllHome = async (_req: Request, res: Response) => {
    const result = await this.service.generateHomeLeaderboard();
    return res.status(200).json(result);
  };

  public findAllAway = async (_req: Request, res: Response) => {
    const result = await this.service.generateAwayLeaderboard();
    return res.status(200).json(result);
  };

  public findLeaderboard = async (_req: Request, res: Response) => {
    const result = await this.service.generateLeaderboard();
    return res.status(200).json(result);
  };
}
