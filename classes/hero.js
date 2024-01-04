class Hero{
    #name;
    #race;
    #healthPoints;
    #damage;
    #lvl;

    constructor(name, race){
        this.#name = name;
        this.#race = race;
        this.#healthPoints = 5;
        this.#damage = 1;
        this.#lvl = 1;
    }


    getName(){
        return this.#name;
    }

    getHP(){
        return this.#healthPoints;
    }

    getDamage(){
        return this.#damage;
    }

    upgradeLvl() {
        return this.#lvl++;
    }

    attack(monster) {
        monster.setHP(monster.getHP()- this.#damage);
        this.#healthPoints -= monster.getDamage();
    }






}

export default Hero;