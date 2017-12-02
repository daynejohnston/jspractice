class ArmorClass {
    public base: number;
    public touch: number;
    public flatFooted: number;
}

class SavingThrow {
    public fortitude: number;
    public reflex: number;
    public will: number;
}

export class Character {
    public _id: string;
    public name: string;
    public characterType: string;
    public maxHitPoints: number;
    public armorClass: ArmorClass;
    public savingThrow: SavingThrow;
    public initiativeBonus: number;
    public tags: string[];
    public tagsDisplay: string;

    constructor() { }
}
