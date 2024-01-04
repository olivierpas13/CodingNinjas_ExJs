import fs from 'fs';

export function saveMonstersToJson(monsters, fileName) {
    const jsonData = JSON.stringify(monsters.map(monster => monster.toJSON()), null, 2);

    fs.writeFile(fileName, jsonData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing JSON file:', err);
        } else {
            console.log('Monsters saved to', fileName);
        }
    });
}