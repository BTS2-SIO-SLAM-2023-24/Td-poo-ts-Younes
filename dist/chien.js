"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chien = void 0;
class chien extends Animal {
    race;
    constructor(id, nom, age, debutPret, finPret, race) {
        super(id, nom, age, debutPret, finPret);
        this.race = race;
    }
    aboyer() {
    }
}
exports.chien = chien;
