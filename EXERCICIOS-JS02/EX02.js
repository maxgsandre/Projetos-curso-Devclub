/*
2. Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO
*/

const person = {
    name: 'Paulo',
    age: 24,
    nacionality: 'Holandes'
}

if(person.nacionality == 'Brasileiro'){
    console.log('Esta pessoa é Brasileira')
}
    else{
        console.log('Esta pessoa é estrangeira')
    }