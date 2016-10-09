import { Component, OnInit } from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import { MatchService } from './match.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MatchService],
})
export class AppComponent implements OnInit {

  title: String = 'Futeboleiro';
  matches: Object = {
    data_hoje: '',
    jogos: [],
  };

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
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
