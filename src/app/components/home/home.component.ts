import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../_services/index';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    currentUser: User;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {

    }
}
