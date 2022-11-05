/*
Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.
*/

const score = -16


 switch (score) {
    case 0 , 1 , 2 , 3 , 4:
        console.log ('Esta reprovado')
        
        break;

    case 5 , 6:
        console.log ('Esta em Recuperação')
        
        break;

    case 7 , 8:
        console.log ('Esta na média')
        
        break;

    case 9 , 10:
        console.log ('Esta aprovado')
        
        break;

    default:
        console.log ('Atribuir numero de 0 a 10')

        break;
}