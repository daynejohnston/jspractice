import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'characters.component.html',
    styleUrls: ['./characters.component.css']
})

export class CharactersComponent {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

}
