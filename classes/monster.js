class Monster{

    #name;
    #race;
    #healthPoints;
    #damage;
    #lvl;

    constructor(name, race, hp, dmg, lvl){
        this.#name = name;
        this.#race = race;
        this.#healthPoints = hp;
        this.#damage = dmg;
        this.#lvl = lvl;
    }

    toJSON() {
        return {
            name: this.#name,
            race: this.#race,
            healthPoints: this.#healthPoints,
            damage: this.#damage,
            level: this.#lvl
        };
    }
    
    getHP(){
        return this.#healthPoints;
    }

    setHP(hp){
        this.#healthPoints = hp;
    }

    getDamage(){
        return this.#damage;
    }

}

export default Monster;