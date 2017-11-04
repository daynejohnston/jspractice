import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'encounters.component.html',
    styleUrls: ['./encounters.component.css']
})

export class EncountersComponent {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

}
