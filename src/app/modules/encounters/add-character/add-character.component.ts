import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from '../_models/character.model';
import { NgForm } from '@angular/forms';
import { CharacterService } from '../_services/character.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  @Output() showForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private characterService: CharacterService ) { }

  model: Character;
  characterTypes = ['Enemy', 'NPC', 'Player'];

  ngOnInit() {
    this.model = new Character();
  }

  submitForm(form: NgForm) {
    this.characterService.create(this.model)
          .subscribe(
            data => {
              this.showForm.emit(false);
            },
            err => console.log('error:', err)
          );
  }

  cancel(): void {
    this.showForm.emit(false);
  }

}
