export class chien extends Animal{ 
    private race: string;

    constructor(id: number, nom:string, age:number, debutPret: Date, finPret: Date, race: string ){
        super(id, nom, age,debutPret, finPret);
        this.race = race;
        }

    aboyer(): void{

    }

}
