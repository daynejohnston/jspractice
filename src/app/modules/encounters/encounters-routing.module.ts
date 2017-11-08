import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EncountersComponent } from './index';

import { AuthGuard } from '../../_guards/index';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: EncountersComponent, canActivate: [AuthGuard]
            }
        ])
    ]
    , exports: [
        RouterModule
    ]
})

export class EncountersRoutingModule { }