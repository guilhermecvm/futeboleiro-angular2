import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesComponent } from './matches.component';
import { ChampionshipRowComponent } from './championship-row/championship-row.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchRowComponent } from './match-row/match-row.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MatchesComponent,
    ChampionshipRowComponent,
    MatchListComponent,
    MatchRowComponent,
  ],
  exports: [
    MatchesComponent,
  ]
})
export class MatchesModule { }
