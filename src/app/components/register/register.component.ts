import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../_services/index';

@Component({
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    const user = data.json().user;
                    if (user) {
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        this.router.navigate(['/home'], { relativeTo: this.route});
                    }
                },
                error => {
                    console.log('Error: ', error);
                    this.loading = false;
                }
            )
    }
 }
