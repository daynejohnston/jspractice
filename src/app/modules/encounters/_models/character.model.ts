

export class Character {
    public name: string;
    public characterType: string;
    public maxHitPoints: number;
    public armorClass: Object = {
        base: null,
        touch: null,
        flatFooted: null
    };
    public savingThrow: Object = {
        fortitude: null,
        reflex: null,
        will: null
    };
    public initiativeBonus: number;

    constructor() { }
}
