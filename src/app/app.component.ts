import { Component, OnInit } from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title: String = 'Futeboleiro';

  constructor() { }

  ngOnInit(): void {
  }

}
