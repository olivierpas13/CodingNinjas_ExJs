import Item from "./item.js";

class Potion extends Item {
    type;
    duration;
    level;
    rarity;

    constructor(name, type, duration, level, rarity, price, slotsRequired) {
        super(name, price, slotsRequired);
        this.type = type;
        this.duration = duration;
        this.level = level;
        this.rarity = rarity;
    }

    toJSON() {
        return {
            ...super.toJSON(),
            type: this.type,
            duration: this.duration,
            level: this.level,
            rarity: this.rarity,
        };
    }
}

export default Potion;
