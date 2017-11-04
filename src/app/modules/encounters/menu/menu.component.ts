import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../_services/index';

@Component({
    selector: 'app-encounters-menu',
    moduleId: module.id,
    templateUrl: 'menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class EncountersMenuComponent {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

}
