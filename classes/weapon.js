import Item from "./item.js";

class Weapon extends Item {
  type;
  dmg;

  constructor(name, type, dmgPoints, price, slotsRequired) {
    super(name, price, slotsRequired);
    this.type = type;
    this.dmg = dmgPoints;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      type: this.type,
      dmg: this.dmg,
    };
  }
}

export default Weapon;
