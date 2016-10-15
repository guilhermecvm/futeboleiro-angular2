import { Component, OnInit } from '@angular/core';

import { MatchService } from './shared/match.service';
import { Live } from './shared/live';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  providers: [MatchService],
})
export class MatchesComponent implements OnInit {

  constructor(private matchService: MatchService) { }

  live: Live = {date:'', championships:[]};

  ngOnInit() {
    this.getMatches();
  }

  getMatches(): void {
    this.matchService.getMatches()
      .subscribe(
        live => this.live = live,
        error => console.log(error)
      );
  }

}
