import { sortBy, groupBy, values } from 'lodash';
import { Championship } from './championship';

export class Live {
  date: string;
  championships: Championship[];

  constructor(json: any) {
    this.date = json.data_hoje;

    var matches = sortBy(json.jogos, ['nome_campeonato', 'hora']);
    var championships = groupBy(matches, 'nome_campeonato');
    this.championships = values(championships).map((matches:any) => new Championship(matches[0].nome_campeonato, matches));
  }
}
