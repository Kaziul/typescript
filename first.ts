interface Player {
    club: string,
    name: string,
    salary: number,
    wife?: string,
    isPlaying: boolean
}
const messy: Player = {
    name: 'messy',
    club: 'Real Madrid',
    salary: 45000000,
    wife: 'Some name',
    isPlaying: true
}
const ronaldo: Player = {
    name:'Ronaldo',
    club:'Liverpool',
    salary: 51000000,
    isPlaying:true
}



// class

class Person {
    name:string;
    private _partner: string;
    readonly fatherName: string; // sudu dekte parbo change korte parbo na
    constructor(name:string, father:string){
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    // methode
    getName():string{
        return this.name;
    }
}
const sam = new Person('Samuel','Devid');
console.log('Name', sam.name, sam.fatherName);
const samName: string = sam.getName();