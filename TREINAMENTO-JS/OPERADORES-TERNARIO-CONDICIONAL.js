/*

? = SE
: = SE NÃO

*/

// EX:1

const rain = true

const umbrela = rain ? 'levar guarda-chuva' : 'deixar guarda-chuva'

console.log(umbrela)

// EX:2

// REQUISIÇÃO PARA TRANSFERIR DINHEIRO 

const balance = true
const isNotBlocked = true
const accountExist = true

const transferOK = balance && isNotBlocked && accountExist ? 'TRASNFERENCIA REALIZADA' : 'TRASNFERENCIA NEGADA'

console.log(transferOK)




