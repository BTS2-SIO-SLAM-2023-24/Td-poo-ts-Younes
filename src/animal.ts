class Animal {
    private id: number;
    private nom: string;
    private age: number;
    private debutPret: Date;
    private finPret: Date;

    constructor(id: number, nom:string, age:number, debutPret: Date, finPret: Date){
    this.id = id;
    this.nom = nom;
    this.age = age;
    this.debutPret = debutPret;
    this.finPret = finPret;
    }

    get Animal(){
        return this.id;
        return this.nom;
        return this.age;
        return this.debutPret;
        return this.finPret;
    }

    faireDuBruit(): void {

    }
    
}