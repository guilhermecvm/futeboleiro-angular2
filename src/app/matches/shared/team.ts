export class Team {
  name: string;
  shield: string;
  score: number;

  constructor(team: any) {
    this.name = team.nome;
    this.shield = team.escudo;
    this.score = team.placar;
  }
}
