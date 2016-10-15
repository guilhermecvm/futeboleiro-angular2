import { Component, OnInit, Input } from '@angular/core';

import { Match } from '../shared/match'

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
})
export class MatchListComponent implements OnInit {

  @Input()
  matches: Match[];

  constructor() { }

  ngOnInit() {
  }
  
}
