import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Character } from '../_models/character.model';
import 'rxjs/Rx';

@Injectable()
export class CharacterService {
    constructor (private http: Http) { }

    private shouldRefreshCharacterList = true;

    private characters: Character[] = [];

    private extractData(res: Response) {
        const body = res.json();
        if (body.length > 1) {
            body.forEach(c => this.updateCharactersWith(c));
        } else {
            this.updateCharactersWith(body);
        }
        return body || {};
    }

    private updateCharactersWith(character) {
        const found = this.characters.filter(c => c._id === character._id)[0];
        if (found) {
            const index = this.characters.indexOf(found);
            this.characters.splice(index, 1, character);
        } else {
            this.characters.push(character);
        }
    }

    private handleError(error: any) {
        console.log('error: ', error);
        return Observable.throw(error.statusText);
    }


    private prepareCharacterToBeSent(character) {
        if (character.tagsDisplay) {
            character.tags = character.tagsDisplay.split(' ');
            delete character.tagsDisplay;
        } else {
            character.tags = [];
        }
        return JSON.stringify(character);
    }

    create(character: Character): Observable<any> {
        const body = this.prepareCharacterToBeSent(character);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post('/api/characters', body, options)
                .map(this.extractData.bind(this))
                .catch(this.handleError);
    }

    update(character: Character): Observable<any> {
        const body = this.prepareCharacterToBeSent(character);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        const url = `/api/characters/${character._id}`;
        return this.http.put(url, body, options)
                    .map(this.extractData.bind(this))
                    .catch(this.handleError);
    }

    getAll(): Observable<any> {
        if (this.shouldRefreshCharacterList) {
            this.shouldRefreshCharacterList = false;
            this.characters = [];
            return this.http.get('/api/characters')
                    .map(this.extractData.bind(this))
                    .catch(this.handleError);
        } else {
            return Observable.of(this.characters).catch(this.handleError);
        }

    }
}
