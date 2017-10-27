import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../_services/index';

@Component({
    selector: 'app-character-builder',
    moduleId: module.id,
    templateUrl: 'character-builder.component.html',
    styleUrls: ['./character-builder.component.css']
})

export class CharacterBuilderComponent {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

}
