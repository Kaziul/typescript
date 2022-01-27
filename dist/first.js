"use strict";
const messy = {
    name: 'messy',
    club: 'Real Madrid',
    salary: 45000000,
    wife: 'Some name',
    isPlaying: true
};
const ronaldo = {
    name: 'Ronaldo',
    club: 'Liverpool',
    salary: 51000000,
    isPlaying: true
};
// class
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    // methode
    getName() {
        return this.name;
    }
}
const sam = new Person('Samuel', 'Devid');
console.log('Name', sam.name, sam.fatherName);
const samName = sam.getName();
