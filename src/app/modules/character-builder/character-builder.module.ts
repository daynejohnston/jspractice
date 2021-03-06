import { NgModule } from '@angular/core';

import { CharacterBuilderRouting } from './character-builder-routing.module';
import { CharacterBuilderComponent } from './character-builder.component';

@NgModule({
  declarations: [
      CharacterBuilderComponent
  ],
  imports: [
    CharacterBuilderRouting,
  ],
  providers: [
  ],
  bootstrap: [CharacterBuilderComponent]
})
export class CharacterBuilderModule { }
