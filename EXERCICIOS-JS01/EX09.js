
// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
// Porém, os dois nomes devem estar em dois objetos separados. 
// Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
// Porém, os dois nomes devem estar em um objeto. 
// Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.


const person1 = {
    name: "João",
    age: 24,
    sex: "male",
    height: 1.64,
    address: "St Rosa"
}

const person2 = {
    name: "Maria",
    age: 24,
    sex: "female",
    height: 1.64,
    address: "St Rosa"
}

console.log(person1.name === person2.name)
console.log(person1.name !== person2.name)

const person = {
    firstName: "Maria",
    seccondName: "joão"
}

console.log(person.firstName === person.seccondName)
console.log(person.firstName !== person.seccondName)