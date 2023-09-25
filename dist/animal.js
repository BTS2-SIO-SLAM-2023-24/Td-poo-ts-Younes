"use strict";
class Animal {
    id;
    nom;
    age;
    debutPret;
    finPret;
    constructor(id, nom, age, debutPret, finPret) {
        this.id = id;
        this.nom = nom;
        this.age = age;
        this.debutPret = debutPret;
        this.finPret = finPret;
    }
    get Animal() {
        return this.id;
        return this.nom;
        return this.age;
        return this.debutPret;
        return this.finPret;
    }
    set Animal() { }
    faireDuBruit() {
    }
}
