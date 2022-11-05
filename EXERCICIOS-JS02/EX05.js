/*
5.[] Crie 5 objetos nesse formato{ nome: idade:" sexo: profissão: "" nacionalidade:" }Ao rodar o programa, 
deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para 
ser aprovada.
*/


const Paulo = {
    name: 'Paulo',
    age: 24,
    nacionality: 'Brasileiro'
    }

const Maria = {
    name: 'Maria',
    age: 17,
    nacionality: 'Brasileiro'
    }    

const Sergio = {
    name: 'Sergio',
    age: 20,
    nacionality: 'Brasileiro'
    }

const Amanda = {
    name: 'Amanda',
    age: 15,
    nacionality: 'Canadense'
    } 

const Diego = {
    name: 'Diego',
    age: 24,
    nacionality: 'Brasileiro'
    } 


if(Paulo.age > 18 && Paulo.nacionality === 'Brasileiro'){
    console.log(`${Paulo.name} passou no pocesso`)
} else{ console.log(`${Paulo.name}  não passou no processo`)}

if(Maria.age > 18 && Maria.nacionality === 'Brasileiro'){
    console.log(`${Maria.name} passou no pocesso`)
} else{ console.log(`${Maria.name}  não passou no processo`)}

if(Sergio.age > 18 && Sergio.nacionality === 'Brasileiro'){
    console.log(`${Sergio.name} passou no pocesso`)
} else{ console.log(`${Sergio.name}  não passou no processo`)}

if(Amanda.age > 18 && Amanda.nacionality === 'Brasileiro'){
    console.log(`${Amanda.name} passou no pocesso`)
} else{ console.log(`${Amanda.name} não passou no processo`)}

if(Diego.age > 18 && Diego.nacionality === 'Brasileiro'){
    console.log(`${Diego.name} passou no pocesso`)
} else{ console.log(`${Diego.name} não passou no processo`)}