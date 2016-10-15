import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Live } from './live';

@Injectable()
export class MatchService {
  private url = '/api/matches';

  constructor (private http: Http) {}

  // getMatches(): Observable<Match[]> {
  getMatches(): Observable<any> {
    return this.http.get(this.url)
                    .map(this.mapData)
                    .catch(this.handleError);
  }

  private mapData(res: Response) {
    let body = res.json();
    return body ? new Live(body) : {};
  }

  private handleError(error: any) {
    let errorMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    return Observable.throw(errorMsg);
  }

}
