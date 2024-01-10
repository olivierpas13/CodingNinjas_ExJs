import promptSync from "prompt-sync";
import Hero from "./classes/hero.js";
import Monster from "./classes/monster.js";
import Weapon from "./classes/weapon.js";
import Potion from "./classes/potion.js";
import { saveGame, saveMonstersToJson } from "./utils.js";

const monsters = [
  new Monster("Dragon", "fireBreather", 8, 4, 6),
  new Monster("Goblin Shaman", "goblin", 3, 2, 2),
  new Monster("Specter", "undead", 6, 3, 5),
  new Monster("Stone Golem", "construct", 10, 5, 7),
  new Monster("Shadow Panther", "shadowCreature", 4, 3, 4),
];
const weapons = [
  new Weapon("Sword", "Melee", 10, 50, 2),
  new Weapon("Bow", "Ranged", 8, 45, 3),
  new Weapon("Staff", "Magic", 12, 60, 1),
];

const potions = [
  new Potion("Health Potion", "Healing", "Instant", 1, "Common", 20, 1),
  new Potion("Mana Elixir", "Mana", "Short", 2, "Uncommon", 30, 1),
  new Potion("Strength Brew", "Buff", "Medium", 3, "Rare", 40, 1),
];

console.log("Welcome to the dungeon!\n");
const prompt = promptSync();
console.log("You need to create your hero!\nWhat's your name?\n");
const name = prompt();
console.log("Whats your hero's race?\n");
const race = prompt();

const hero = new Hero(name, race);

console.log("Your hero has been created!\n Hello " + hero.getName());

console.log("\nDo you want to attack");

console.log("\n1. Yes\n2. No");
const option = prompt();

option === "1"
  ? hero.attack(monsters[0])
  : console.log("The monster ran away, coward");

saveMonstersToJson(monsters, "monsters.json");
saveGame(monsters, hero, weapons, potions, "saved.json");
