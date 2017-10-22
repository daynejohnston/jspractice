import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http,
                private router: Router) { }

    login(username: string, password: string) {
        return this.http.post('/login', { username: username, password: password })
            .map((response: Response) => {
                const user = response.json().user;
                if (user) {
                    // store user details in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    return user;
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        const user = localStorage.getItem('currentUser');

        return this.http.get('/logout')
                .map((response: Response) => {
                  localStorage.removeItem('currentUser');
                  this.router.navigate(['/login']);
                });
    }
}
