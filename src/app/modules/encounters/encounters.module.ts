import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharacterService } from './_services/character.service';
import { EncounterService } from './_services/encounter.service';

import { EncountersRoutingModule } from './encounters-routing.module';

import { EncountersComponent } from './encounters.component';
import { MenuComponent } from './menu/index';

import { AuthGuard } from '../../_guards/index';

import { CharactersComponent } from './characters/characters.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { AddCharacterComponent } from './characters/add-character/add-character.component';

import { ListComponent } from './list/list.component';
import { EncountersListComponent } from './list/encounters-list/encounters-list.component';

import { PlayComponent } from './play/play.component';

import { FocusDirective } from './_directives/focus.directive';
import { AddEncounterComponent } from './list/add-encounter/add-encounter.component';
import { NameAndTagsPipe } from './_pipes/name-and-tags.pipe';
import { UniqueCharactersPipe } from './_pipes/unique-characters.pipe';

@NgModule({
  declarations: [
      EncountersComponent,
      MenuComponent,
      CharactersComponent,
      ListComponent,
      PlayComponent,
      CharacterListComponent,
      AddCharacterComponent,
      FocusDirective,
      EncountersListComponent,
      AddEncounterComponent,
      NameAndTagsPipe,
      UniqueCharactersPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    EncountersRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    CharacterService,
    EncounterService
  ],
  bootstrap: [EncountersComponent]
})
export class EncountersModule { }
