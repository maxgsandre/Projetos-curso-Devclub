// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
// Ex: João e João, imprime true. João e Maria, imprime false.


// ---------------------------------- Modelo 1 ---------------------------------------

let my_name_one = "João"
let my_name_two = "João"

console.log(my_name_one == my_name_two)


let my_name_three = "João"
let my_name_four = "Maria"

console.log(my_name_three == my_name_four)

// ---------------------------------- Modelo 2 ---------------------------------------

const firstName = "João"
const seccondName = "João"

const compare = firstName === seccondName

console.log(compare)

const thirdName = "João"
const fourthName = "Maria"

const check = thirdName === fourthName

console.log(check)

