import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { CharacterBuilderRouting } from './character-builder.routing';
import { CharacterBuilderComponent } from './character-builder.component';

@NgModule({
  declarations: [
      CharacterBuilderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CharacterBuilderRouting,
    NgbModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [CharacterBuilderComponent]
})
export class CharacterBuilderModule { }
