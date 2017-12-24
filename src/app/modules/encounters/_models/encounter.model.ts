import { Character } from './character.model';

export class Encounter {

    constructor() {
        this.characters = [];
     }

    public _id: string;
    public name: string;
    public characters: Character[];
    public tags: string[];
    public tagsDisplay: string;
    public round: number;
    public usesStaticInitiative: boolean;

    startEncounter(): void {
        if (this.round === 0) {
            this.characters.forEach(c => c.rollInitiative());
          }
    }

}
