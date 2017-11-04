import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EncountersComponent } from './index';

import { AuthGuard } from '../../_guards/index';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: EncountersComponent
            }
        ])
    ]
    , exports: [
        RouterModule
    ]
})

export class EncountersRoutingModule { }