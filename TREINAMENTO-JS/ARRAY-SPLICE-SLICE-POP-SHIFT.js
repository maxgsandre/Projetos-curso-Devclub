

const students = ["Maria","João","Marcelo","Otavio","Carlos"]

students.splice(1,2,'MAX') //RETIRA OU COLOCAR ITENS ESCOLHIDOS DE DENTRO DE UM ARRA 
// ( 1 = APARTIR DO ITEM ESCOLHIDO , 2 QUANTOS ITENS ESCOLHIDOS OU COLOCAR O ITEM APARTIR DO ITEM SELECIONADO) 

console.log (students)

const person = ["Maria","João","Marcelo","Otavio","Carlos"]

const newPerson = students.slice(2,4) // RETIRA TODOS OS ITENS PARA FRENTE A PARTIR DO ITEM SELECIONADO OU PARANDO DE RETIRAR ATE O ITEM A FRENTE SELECIONADO
// ( 2 = COMEÇAR A RETIRAR APARTIR DO ITEM 2, 4 = PARAR DE RETIRAR ATE CHEGAR A ESSE ITEM)
// OBS: DIREFERNTE DO SPLICE, O SLICE NÃO MODIFICA UM ARRAY, E SIM CRIA UM NOVO, ASSIM PRECISA COLOCAR EM UMA VARIAVÉL.

console.log(newPerson)

const people = ["Maria","João","Marcelo","Otavio","Carlos"]

people.pop() // RETIRA O ULTIMO ITEM DO ARRAY
people.shift() // RETIRA O PRIMEIRO ITEM DO ARRAY

console.log (people)