 export class employe{
    private id: number;
    private nom: string;
    private animal: object|null;

    constructor(id: number, nom: string, animal: Animal|null){
        this.id = id;
        this.nom = nom;
        this.animal = animal;
    }

    travaillerAvec(): void{
        console.log('Employé(e) travaillant avec un animal');
    }

    assignerUnAnimal(): void{

    }

    retirerUnAnimal(): void{

    }
 
}