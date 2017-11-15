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

  onShowForm() {
    this.showList = !this.showList;
  }

}
