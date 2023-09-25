"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employe = void 0;
class employe {
    id;
    nom;
    animal;
    constructor(id, nom, animal) {
        this.id = id;
        this.nom = nom;
        this.animal = animal;
    }
    travaillerAvec() {
        console.log('Employé(e) travaillant avec un animal');
    }
    assignerUnAnimal() {
    }
    retirerUnAnimal() {
    }
}
exports.employe = employe;
