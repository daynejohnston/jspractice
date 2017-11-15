import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharacterService } from './_services/character.service';

import { EncountersRoutingModule } from './encounters-routing.module';

import { EncountersComponent } from './encounters.component';
import { MenuComponent } from './menu/index';

import { AuthGuard } from '../../_guards/index';
import { CharactersComponent } from './characters/characters.component';
import { ListComponent } from './list/list.component';
import { PlayComponent } from './play/play.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { AddCharacterComponent } from './add-character/add-character.component';

@NgModule({
  declarations: [
      EncountersComponent,
      MenuComponent,
      CharactersComponent,
      ListComponent,
      PlayComponent,
      CharacterListComponent,
      AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EncountersRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    CharacterService
  ],
  bootstrap: [EncountersComponent]
})
export class EncountersModule { }
