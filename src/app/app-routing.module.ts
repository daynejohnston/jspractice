import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';

import { HomeComponent } from './components/home/index';
import { LoginComponent } from './components/login/index';
import { RegisterComponent } from './components/register/index';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
                children: [
                    { path: 'Encounters', loadChildren: './modules/encounters/encounters.module#EncountersModule' },
                    {
                        path: 'CharacterBuilder'
                        , loadChildren: './modules/character-builder/character-builder.module#CharacterBuilderModule'
                    }
                ]  },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ])
    ]
    , exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
