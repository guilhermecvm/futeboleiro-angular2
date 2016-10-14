import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchListComponent } from './match-list/match-list.component';
import { MatchRowComponent } from './match-row/match-row.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MatchListComponent,
    MatchRowComponent,
  ],
  exports: [
    MatchListComponent,
  ]
})
export class MatchesModule { }
