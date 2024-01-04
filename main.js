
import promptSync from 'prompt-sync';
import Hero from "./classes/hero.js"
import Monster from "./classes/monster.js";
import { saveMonstersToJson } from './utils.js';

console.log("Welcome to the dungeon!\n");
const prompt = promptSync();
console.log("You need to create your hero!\nWhat's your name?\n")
const name = prompt();
console.log("Whats your hero's race?\n")
const race = prompt();

const hero = new Hero(name, race) 

console.log("Your hero has been created!\n Hello " + hero.getName())

const hero1 = new Hero("Olivier", "humano");

console.log("\nDo you want to attack");

const monsters = [
    new Monster("Dragon", "fireBreather", 8, 4, 6),
    new Monster("Goblin Shaman", "goblin", 3, 2, 2),
    new Monster("Specter", "undead", 6, 3, 5),
    new Monster("Stone Golem", "construct", 10, 5, 7),
    new Monster("Shadow Panther", "shadowCreature", 4, 3, 4)
];

saveMonstersToJson(monsters, "monsters.json");




// hero1.attack(monster1);

// console.log(hero1.getHP())
// console.log(monster1.getHP())




// console.log(hero1);
// console.log(monster1);

// hero1.attack(monster1);

// console.log(monster1);
