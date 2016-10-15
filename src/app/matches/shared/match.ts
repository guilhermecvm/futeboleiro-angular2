import { Team } from './team';

export class Match {
  hour: string;
  home: Team;
  away: Team;

  constructor(match: any) {
    this.hour = match.hora;
    this.home = new Team(match.time_casa);
    this.away = new Team(match.time_visitante);
  }
}
