import Teams from '../database/models/TeamsModel';
import Matches from '../database/models/MatchesModel';
import JWTService from '../utils/JWT';
import ValidationExistTeam from '../middlewares/ValidationExistTeam';

export default class MatchesService {
  jwt = new JWTService();
  validateTeams = new ValidationExistTeam();

  constructor(private matches = Matches) {}

  public getAllMatches = async () => {
    const matches = await this.matches.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  };

  public getMatches = async (progress: boolean) => {
    const matches = await this.matches.findAll({
      where: { inProgress: progress },
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  };

  public postMatch = async (body: {
    homeTeam: number, awayTeam: number, homeTeamGoals: number, awayTeamGoals: number
  }, authorization: string) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = body;

    if (homeTeam === awayTeam) { return 422; }

    const validate = await this.validateTeams.validateTeam(homeTeam, awayTeam);
    if (validate === 404) { return 404; }

    const validationToken = this.jwt.validateToken(authorization);
    if (validationToken.type === 400) { return 401; }

    const matches = await this.matches.create({
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true,
    });
    return matches;
  };

  public patchMatch = async (id: string) => {
    const match = await this.matches.update({ inProgress: false }, { where: { id } });
    return match;
  };
}
