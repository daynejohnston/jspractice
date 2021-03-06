import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Encounter } from '../_models/encounter.model';
import { Character } from '../_models/character.model';

@Injectable()
export class EncounterService {

  constructor(private http: Http) { }

  private shouldRefreshEncounterList = true;

  private encounters: Encounter[] = [];

  private extractData(res: Response): Encounter[] {
    const body = res.json();
    const encounters = [];

    if (Array.isArray(body)) {
      body.forEach(e => {
        e.characters = e.characters.map(c => Object.assign(new Character(), c));
        encounters.push(Object.assign(new Encounter(), e));
        this.updateEncountersWith(e);
      });
    } else {
      const encounter = Object.assign(new Encounter(), body);
      encounter.characters = body.characters.map(c => Object.assign(new Character(), c));
      encounters.push(encounter);
      this.updateEncountersWith(encounter);
    }

    return encounters;
  }

  private updateEncountersWith(encounter: Encounter) {
    const found = this.encounters.filter(e => e._id === encounter._id)[0];
    if (found) {
        const index = this.encounters.indexOf(found);
        this.encounters.splice(index, 1, encounter);
    } else {
        this.encounters.push(encounter);
    }
  }

  private handleError(error: any) {
    console.log('error: ', error);

    if (error._body) {
      const errors = JSON.parse(error._body);
      return Observable.throw(errors.message);
    }

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

  getAll(): Observable<Encounter[]> {
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
