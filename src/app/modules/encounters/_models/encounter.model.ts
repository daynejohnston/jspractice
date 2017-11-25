import { Character } from './character.model';

export class Encounter {

    constructor() { }

    public _id: string;
    public name: string;
    public characters: Character[];
    public tags: string[];
    public tagsDisplay: string;
    public round: number;
    public usesStaticInitiative: boolean;

}
