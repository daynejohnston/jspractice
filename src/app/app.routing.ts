import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { EncountersComponent } from './home/encounters/index';
import { CharacterBuilderComponent } from './home/character-builder/index';
import { LoginComponent } from './login/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard],
        children: [
            { path: 'encounters', component: EncountersComponent, canActivate: [AuthGuard] },
            { path: 'character-builder', component: CharacterBuilderComponent, canActivate: [AuthGuard] }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
