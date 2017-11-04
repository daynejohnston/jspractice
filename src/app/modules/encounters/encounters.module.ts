import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EncountersRoutingModule } from './encounters-routing.module';

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
    EncountersRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [EncountersComponent]
})
export class EncountersModule { }
