import { Match } from './match';

export class Championship {
  name: string;
  matches: Match[];

  constructor(name:string, matches:any) {
    this.name = name;
    this.matches = matches.map(m => new Match(m));
  }
}
