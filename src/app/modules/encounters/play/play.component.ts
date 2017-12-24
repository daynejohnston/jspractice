import { Component, OnInit } from '@angular/core';
import { EncounterService } from '../_services/encounter.service';
import { Encounter } from '../_models/encounter.model';
import { Character } from '../_models/character.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit {
  public encounterSelected = false;
  public encounter: Encounter = null;

  public rounds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  public encounters: Encounter[] = [];

  constructor(private encounterService: EncounterService) { }

  ngOnInit() {
    this.GetEncounters();
  }

  public startEncounter(encounter: Encounter) {
    this.encounterSelected = true;
    this.encounter = encounter;
    this.encounter.startEncounter();
  }

  public closeEncounter() {
    this.encounterSelected = false;
    this.encounter = null;
  }

  public nextRound() {
    this.encounter.round++;
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

}
