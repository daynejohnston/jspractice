import { Component, OnInit } from '@angular/core';
import { Character } from '../_models/character.model';
import { Encounter } from '../_models/encounter.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private showList = true;
  private model: Character;

  constructor() { }

  ngOnInit() {
  }

  onShowForm(character: Character) {
    if (character) {
      this.model = character;
    } else {
      this.model = null;
    }
    this.showList = !this.showList;
  }

}
