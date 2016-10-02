import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  @Input()
  matches: Object;

  constructor() { }

  ngOnInit() {
  }

}
