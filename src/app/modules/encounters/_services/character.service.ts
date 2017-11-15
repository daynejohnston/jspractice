import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Character } from '../_models/character.model';
import 'rxjs/Rx';

@Injectable()
export class CharacterService {
    constructor (private http: Http) { }

    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        console.error('post error: ', error);
        return Observable.throw(error.statusText);
    }

    create(character: Character): Observable<any> {
        const body = JSON.stringify(character);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post('/api/characters', body, options)
                .map(this.extractData)
                .catch(this.handleError);
    }

    getAll(): Observable<any> {
        return this.http.get('/api/characters')
                .map(this.extractData)
                .catch(this.handleError);
    }
}
