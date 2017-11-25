import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CharacterService} from '../../_services/character.service';
import { Character } from '../../_models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})

export class CharacterListComponent implements OnInit {
  @Output() showForm: EventEmitter<Character> = new EventEmitter<Character>();
  private characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getAll()
        .subscribe(
          data => {
            data.map(character => this.characters.push(character));
          },
          err => console.log(err)
        );
  }

  onEditCharacter(character: Character): void {
    this.showForm.emit(character);
  }

}
