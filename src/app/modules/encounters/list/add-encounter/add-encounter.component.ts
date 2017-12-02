import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Encounter } from '../../_models/encounter.model';
import { NgForm } from '@angular/forms';
import { EncounterService } from '../../_services/encounter.service';
import { CharacterService } from '../../_services/character.service';
import { Character } from '../../_models/character.model';
import { Selected } from '../../_models/selected.model';

@Component({
  selector: 'app-add-encounter',
  templateUrl: './add-encounter.component.html',
  styleUrls: ['./add-encounter.component.css']
})

export class AddEncounterComponent implements OnInit {
  @Input() model: Encounter;
  @Output() showForm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private encounterService: EncounterService,
              private characterService: CharacterService) { }

  public editingName: boolean;
  public characters: Character[] = [];
  public selected: Selected[] = [];

  public searchText = '';

  public ngOnInit() {
    this.initializeModel();
    this.getCharacters();
  }

  private initializeModel() {
    if (this.model) {
      this.model.tagsDisplay = this.model.tags.join(' ');

      this.selected = this.model.characters.reduce((selected, current) => {
        const index = selected.findIndex(c => c.name === current.name);
        if (index === -1) {
          selected.push(new Selected(current.name, 1));
        } else {
          selected[index].count++;
        }

        return selected;
      }, []);
    } else {
      this.model = new Encounter();
      this.editingName = true;
    }
  }

  private getCharacters() {
    this.characterService.getAll()
        .subscribe(
          data => {
            data.map(character => this.characters.push(character));
          },
          err => console.log(err)
        );
  }

  public submitForm(form: NgForm) {
    if (this.model._id) {
      this.updateEncounter(this.model);
    } else {
      this.createEncounter(this.model);
    }
  }

  public createEncounter(encounter: Encounter) {
    this.encounterService.create(encounter)
    .subscribe(
      data => {
        this.showForm.emit();
      },
      err => console.log('error:', err)
    );
  }

  public updateEncounter(encounter: Encounter) {
    this.encounterService.update(encounter)
      .subscribe(
        data => {
          this.showForm.emit();
        },
        err => console.log('error: ', err)
      );
  }

  public remove(encounter: Encounter) {
    this.encounterService.remove(encounter)
      .subscribe(
        data => {
          this.showForm.emit();
        },
        err => console.log('error: ', err)
      );
  }

  public cancel(): void {
    this.showForm.emit();
  }

  public toggleNameEdit(): void {
    this.editingName = !this.editingName;
  }

  public addCharacter(character: Character) {
    if (!this.model.characters) {
      this.model.characters = [];
    }
    this.model.characters.push(character);

    this.trackCount(character, true);
  }

  private trackCount(character: Character, increment: boolean) {
    const index = this.selected.findIndex(c => c.name === character.name);
    if (index === -1) {
      this.selected.push(new Selected(character.name, 1));
      return;
    }

    increment ? this.selected[index].count++ : this.selected[index].count--;
    if (this.selected[index].count === 0) {
      this.selected.splice(index, 1);
    }
  }

  public removeCharacter(character: Character) {
    const index = this.model.characters.lastIndexOf(character);
    this.model.characters.splice(index, 1);

    this.trackCount(character, false);
  }

}
