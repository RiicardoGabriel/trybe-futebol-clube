import { Op } from 'sequelize';
import Teams from '../database/models/TeamsModel';

export default class ValidationExistTeam {
  constructor(private teams = Teams) {}

  public validateTeam = async (home: number, away: number) => {
    const validate = await this.teams.findAll({ where: { [Op.or]: [
      { id: home },
      { id: away },
    ],
    } });
    console.log(validate);
    if (validate.length === 0 || validate.length === 1) { return 404; }
    return validate;
  };
}
