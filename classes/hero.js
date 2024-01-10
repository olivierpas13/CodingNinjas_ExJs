class Hero {
    #name;
    #race;
    #healthPoints;
    #damage;
    #lvl;
  
    constructor(name, race) {
      this.#name = name;
      this.#race = race;
      this.#healthPoints = 5;
      this.#damage = 1;
      this.#lvl = 1;
    }
  
    toJSON() {
      return {
        name: this.#name,
        race: this.#race,
        healthPoints: this.#healthPoints,
        damage: this.#damage,
        lvl: this.#lvl,
      };
    }
  
    getName() {
      return this.#name;
    }
  
    getHP() {
      return this.#healthPoints;
    }
  
    getDamage() {
      return this.#damage;
    }
  
    upgradeLvl() {
      return this.#lvl++;
    }
  
    attack(monster) {
      monster.setHP(monster.getHP() - this.#damage);
      this.#healthPoints -= monster.getDamage();
      console.log(
        "\nYou attacked the monster\n Now the monster has " +
          monster.getHP() +
          " health points"
      );
    }
  }
  
  export default Hero;
  