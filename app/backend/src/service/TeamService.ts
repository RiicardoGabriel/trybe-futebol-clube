import Teams from '../database/models/TeamsModel';

export default class TeamsService {
  constructor(private teams = Teams) {}

  public getAllTeams = async () => {
    const teams = await this.teams.findAll();
    return teams;
  };

  public getTeam = async (id: string) => {
    const team = await this.teams.findOne({ where: { id } });
    return team;
  };
}
