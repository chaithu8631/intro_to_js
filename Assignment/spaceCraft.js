const EMBER = "Ember";
const NEBULA = "Nebula";
const RIFT = "Rift";
const AURORA = "Aurora";
const OBSIDIAN = "Obsidian";
const ECLIPSE = "Eclipse";

function pathOfShip1(gate) {
    if (gate === AURORA) return EMBER;
    else if (gate === EMBER) return NEBULA;
    else if (gate === NEBULA) return RIFT;
    else if (gate === RIFT) return AURORA;
}

function pathOfShip2(gate) {
    if (gate === EMBER) return NEBULA;
    else if (gate === NEBULA) return RIFT;
    else if (gate === RIFT) return OBSIDIAN;
    else if (gate === OBSIDIAN) return ECLIPSE;
    else if (gate === ECLIPSE) return EMBER;
}

function meet(ship1, ship2) {
    // if (ship1 === ship2) {
    //   return 0;
    // }
    // return meet(pathOfShip1(ship1), pathOfShip2(ship2)) + 1;
    return ship1 === ship2
        ? 0
        : meet(pathOfShip1(ship1), pathOfShip2(ship2)) + 1;
}

console.log(meet("Aurora", "Ember"));
// console.log(meet("Nebula", "Obsidian"));
// console.log(meet("Ember", "Nebula"));
// console.log(meet("Rift", "Eclipse"));
// AURORA → EMBER → Nebula → Rift → AURORA → EMBER → Nebula → Rift → AURORA → EMBER → Nebula → Rift → AURORA
// EMBER → Nebula → Rift → OBSIDIAN → ECLIPSE → EMBER → Nebula → Rift → OBSIDIAN → ECLIPSE → EMBER →  Nebula
