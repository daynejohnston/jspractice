import { Routes, RouterModule } from '@angular/router';

import { CharacterBuilderComponent } from './index';

import { AuthGuard } from '../../_guards/index';

const CharacterBuilderRoutes: Routes = [
    {
        path: 'CharacterBuilder', component: CharacterBuilderComponent
    }
];

export const CharacterBuilderRouting = RouterModule.forChild(CharacterBuilderRoutes);
