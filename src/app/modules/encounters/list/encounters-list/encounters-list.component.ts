import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EncounterService } from '../../_services/encounter.service';
import { Character } from '../../_models/character.model';
import { Encounter } from '../../_models/encounter.model';

@Component({
  selector: 'app-encounters-list',
  templateUrl: './encounters-list.component.html',
  styleUrls: ['./encounters-list.component.css']
})

export class EncountersListComponent implements OnInit {
  @Output() showForm: EventEmitter<Encounter> = new EventEmitter<Encounter>();
  public encounters: Encounter[] = [];

  constructor(private encounterService: EncounterService) { }

  ngOnInit() {
    this.GetEncounters();
  }

  private GetEncounters() {
    this.encounterService.getAll()
        .subscribe(
          data => {
            data.map(encounter => this.encounters.push(encounter));
          },
          err => console.log(err)
        );
  }

  onEditEncounter(encounter: Encounter): void {
    this.showForm.emit(encounter);
  }

}
