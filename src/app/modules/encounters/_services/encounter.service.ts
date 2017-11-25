import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Encounter } from '../_models/encounter.model';

@Injectable()
export class EncounterService {

  constructor(private http: Http) { }

  private shouldRefreshEncounterList = true;

  private encounters: Encounter[] = [];

  private extractData(res: Response) {
    const body = res.json();
    if (body.length > 1) {
        body.forEach(c => this.updateEncountersWith(c));
    } else {
        this.updateEncountersWith(body);
    }
    return body || {};
  }

  private updateEncountersWith(encounter) {
    const found = this.encounters.filter(c => c._id === encounter._id)[0];
    if (found) {
        const index = this.encounters.indexOf(found);
        this.encounters.splice(index, 1, encounter);
    } else {
        this.encounters.push(encounter);
    }
  }

  private handleError(error: any) {
    console.log('error: ', error);
    return Observable.throw(error.statusText);
  }

  private prepareEncounterToBeSent(encounter: Encounter) {
    if (encounter.tagsDisplay) {
      encounter.tags = encounter.tagsDisplay.split(' ');
      delete encounter.tagsDisplay;
    } else {
      encounter.tags = [];
    }
    return JSON.stringify(encounter);
  }


  create(encounter: Encounter): Observable<any> {
    const body = this.prepareEncounterToBeSent(encounter);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const url = '/api/encounters';

    return this.http.post(url, body, options)
            .map(this.extractData.bind(this))
            .catch(this.handleError);
  }

  update(encounter: Encounter): Observable<any> {
    const body = this.prepareEncounterToBeSent(encounter);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const url = `/api/encounters/${encounter._id}`;

    return this.http.put(url, body, options)
              .map(this.extractData.bind(this))
              .catch(this.handleError);
  }

  remove(encounter: Encounter): Observable<any> {
    const url = `/api/encounters/${encounter._id}`;

    return this.http.delete(url)
              .map(() => {
                const index = this.encounters.indexOf(encounter);
                this.encounters.splice(index, 1);
                return `Removed encounter ID: ${encounter._id}`;
              })
              .catch(this.handleError);
  }

  getAll(): Observable<any> {
    if (this.shouldRefreshEncounterList) {
      this.shouldRefreshEncounterList = false;
      this.encounters = [];

      return this.http.get('/api/encounters')
                .map(this.extractData.bind(this))
                .catch(this.handleError);
    } else {
      return Observable.of(this.encounters).catch(this.handleError);
    }
  }

}
