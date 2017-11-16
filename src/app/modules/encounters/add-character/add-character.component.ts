import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../_models/character.model';
import { NgForm } from '@angular/forms';
import { CharacterService } from '../_services/character.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  @Input() model: Character;
  @Output() showForm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private characterService: CharacterService ) { }
  editingName: boolean;
  characterTypes = ['Enemy', 'NPC', 'Player'];

  ngOnInit() {
    if (!this.model) { this.model = new Character(); }
    this.editingName = true;
  }

  submitForm(form: NgForm) {
    if (this.model._id) {
      this.updateCharacter(this.model);
    } else {
      this.createCharacter(this.model);
    }
  }

  createCharacter(character: Character) {
    this.characterService.create(character)
    .subscribe(
      data => {
        this.showForm.emit();
      },
      err => console.log('error:', err)
    );
  }

  updateCharacter(character: Character) {
    this.characterService.update(character)
      .subscribe(
        data => {
          this.showForm.emit();
        },
        err => console.log('error: ', err)
      );
  }

  cancel(): void {
    this.showForm.emit();
  }

  toggleNameEdit(): void {
    this.editingName = !this.editingName;
  }

}
