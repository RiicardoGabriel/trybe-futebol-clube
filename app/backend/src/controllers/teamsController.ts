import { Request, Response } from 'express';
import TeamsService from '../service/TeamService';

export default class TeamsController {
  service = new TeamsService();

  public getTeams = async (_req: Request, res: Response) => {
    const result = await this.service.getAllTeams();
    return res.status(200).json(result);
  };

  public getTeamById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.getTeam(id);
    return res.status(200).json(result);
  };
}
