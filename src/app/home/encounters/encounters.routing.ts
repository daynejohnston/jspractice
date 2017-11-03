import { Routes, RouterModule } from '@angular/router';

import { EncountersComponent } from './index';
import { CharactersComponent } from './characters/index';
import { EncountersMenuComponent } from './menu/index';

import { AuthGuard } from '../../_guards/index';

const EncountersRoutes: Routes = [
    {
        path: 'Encounters', component: EncountersComponent
    }
];

export const EncountersRouting = RouterModule.forChild(EncountersRoutes);
