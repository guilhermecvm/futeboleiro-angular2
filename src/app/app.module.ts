import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchRowComponent } from './match-row/match-row.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchListComponent,
    MatchRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
