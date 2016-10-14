import { Component, OnInit, Input } from '@angular/core';

import { MatchService } from '../shared/match.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
  providers: [MatchService],
})
export class MatchListComponent implements OnInit {

  matches: Object = {
    data_hoje: '',
    jogos: [],
  };

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.getMatches();
  }

  getMatches(): void {
    this.matchService.getMatches()
      .subscribe(
        matches => this.matches = matches,
        error => console.log(error)
      );
  }

}
