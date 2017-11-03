import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { EncountersRouting } from './encounters.routing';

import { EncountersComponent } from './encounters.component';
import { EncountersMenuComponent } from './menu/index';
import { CharactersComponent } from './characters/index';

import { AuthGuard } from '../../_guards/index';
// import { AuthenticationService, UserService } from './_services/index';

@NgModule({
  declarations: [
      EncountersComponent,
      EncountersMenuComponent,
      CharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    EncountersRouting,
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [EncountersComponent]
})
export class EncountersModule { }
