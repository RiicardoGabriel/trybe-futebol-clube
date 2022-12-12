import IMatchGoals from './IMathGoals';

export default interface IMatchCreate extends IMatchGoals {
  homeTeam: number;
  awayTeam: number;
}
