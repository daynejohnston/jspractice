import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  private showList = true;

  constructor() { }

  ngOnInit() {
  }

  showAddCharacterForm() {
    this.showList = false;
  }

  onCancelClicked() {
    this.showList = true;
  }

}
