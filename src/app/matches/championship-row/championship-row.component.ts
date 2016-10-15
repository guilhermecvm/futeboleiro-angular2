import { Component, OnInit, Input } from '@angular/core';

import { Championship } from '../shared/championship';

@Component({
  selector: 'app-championship-row',
  templateUrl: './championship-row.component.html',
  styleUrls: ['./championship-row.component.scss']
})
export class ChampionshipRowComponent implements OnInit {

  @Input()
  championship: Championship;

  constructor() { }

  ngOnInit() {
  }

}
