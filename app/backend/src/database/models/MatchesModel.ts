import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Teams from './TeamsModel';

class Matches extends Model {
  declare id: number;
  declare homeTeam: number;
  declare homeTeamGoals: number;
  declare awayTeam: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}
Matches.init(
  {
    id: { type: INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    homeTeam: { type: INTEGER, allowNull: false },
    homeTeamGoals: { type: INTEGER, allowNull: false },
    awayTeam: { type: INTEGER, allowNull: false },
    awayTeamGoals: { type: INTEGER, allowNull: false },
    inProgress: { type: BOOLEAN, allowNull: false },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    modelName: 'matches',
  },
);

Matches.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'teamHome' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'teamAway' });

Teams.hasMany(Matches, { foreignKey: 'homeTeam', as: 'homeMatches' });
Teams.hasMany(Matches, { foreignKey: 'awayTeam', as: 'awayMatches' });

export default Matches;
