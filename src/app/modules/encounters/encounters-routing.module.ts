import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../../_guards/index';

import { EncountersComponent } from './index';
import { CharactersComponent } from './characters/characters.component';
import { ListComponent } from './list/list.component';
import { PlayComponent } from './play/play.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: EncountersComponent, canActivate: [AuthGuard],
                children: [
                    { path: 'Characters', component: CharactersComponent, canActivate: [AuthGuard] }
                    , { path: 'List', component: ListComponent, canActivate: [AuthGuard] }
                    , { path: 'Play', component: PlayComponent, canActivate: [AuthGuard]}
                ]
            }
        ])
    ]
    , exports: [
        RouterModule
    ]
})

export class EncountersRoutingModule { }