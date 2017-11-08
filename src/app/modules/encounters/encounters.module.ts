import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EncountersRoutingModule } from './encounters-routing.module';

import { EncountersComponent } from './encounters.component';
import { MenuComponent } from './menu/index';

import { AuthGuard } from '../../_guards/index';
import { CharactersComponent } from './characters/characters.component';


@NgModule({
  declarations: [
      EncountersComponent,
      MenuComponent,
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
