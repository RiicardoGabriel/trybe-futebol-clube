import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';

class Matches extends Model {
  declare id: number;
  declare homeTeam: number;
  declare homeTeamGoals: number;
  declare awayTeam: number;
  declare awayTeamsGoals: number;
  declare inProgress: boolean;
}
Matches.init(
  {
    id: { type: INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    homeTeam: { type: INTEGER, allowNull: false },
    homeTeamGoals: { type: INTEGER, allowNull: false },
    awayTeam: { type: INTEGER, allowNull: false },
    awayTeamsGoals: { type: INTEGER, allowNull: false },
    inProgress: { type: BOOLEAN, allowNull: false },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
  },
);

export default Matches;
