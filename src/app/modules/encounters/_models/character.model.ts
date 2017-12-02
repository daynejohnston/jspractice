export class Character {
    public _id: string;
    public name: string;
    public characterType: string;
    public maxHitPoints: number;
    public armorClass: {
        base: number;
        touch: number;
        flatFooted: number;
    };
    public savingThrow: {
        fortitude: number;
        reflex: number;
        will: number;
    };
    public initiativeBonus: number;
    public tags: string[];
    public tagsDisplay: string;

    constructor() {
        this.armorClass = { base: null, touch: null, flatFooted: null };
        this.savingThrow = { fortitude: null, reflex: null, will: null };
     }
}
