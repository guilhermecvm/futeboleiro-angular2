import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-row',
  templateUrl: './match-row.component.html',
  styleUrls: ['./match-row.component.scss']
})
export class MatchRowComponent implements OnInit {

  @Input()
  match: Object;

  constructor() { }

  ngOnInit() {
  }

}
