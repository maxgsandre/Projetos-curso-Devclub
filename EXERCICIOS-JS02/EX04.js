/*
4. Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.
*/

const number1 = 1
const number2 = 3
const number3 = 0

if (number1 > number2 &&  number1 > number3){
    console.log(`O primeiro é o maior numero`)
}
else if (number2 > number3){
    console.log(`O segund0 é o maior numero`)
}
else {
    console.log(`O terceiro é o maior numero`)
}

if (number1 < number2 &&  number1 < number3){
    console.log(`O primeiro é o menor numero`)
}
else if (number2 < number3){
    console.log(`O segundo é o menor numero`)
}
else {
    console.log(`O terceiro é o menor numero`)
}