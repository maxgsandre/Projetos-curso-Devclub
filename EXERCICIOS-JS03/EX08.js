/* 
8. [] Escreva um programa onde, você cria uma função geradora de desconto.

A função aceita 4 parâmetros: 
(Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, 
um booleano que diz se o cliente vai pagar a vista ou não)

- Os descontos funcionam da seguinte forma:

- Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto

- Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto

- Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%

------

- Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 

- Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto

- Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de  10%

-------

- Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto

- Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto

- Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de  10%

------

- Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto 

- Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto

- Se NAO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- A função deve imprimir na tela:

------

- Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, 
o valor total com desconto e a porcentagem de desconto que ele recebeu.

- Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, 
o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para 
a próxima compra.
*/

function calculateDiscount (name ,value , isFirstPurchase, isCashPayment) {

        if(isFirstPurchase && isCashPayment){

                if(value >= 1000) {
                        console.log ("Agradecemos pela compra, Volte sempre!")
                        console.log (`Valor da compra R$${value}`)
                        console.log ("Cupom de 30% de desconto")
                        console.log (`Valor total da compra R$${value -(value * 0.3)}`)
                }
                else if (value < 500){
                        console.log ("Agradecemos pela compra, Volte sempre!")
                        console.log (`Valor da compra R$${value}`)
                        console.log ("Cupom de 20% de desconto")
                        console.log (`Valor total da compra R$${value -(value * 0.2)}`)
                }
                else {
                        console.log ("Agradecemos pela compra, Volte sempre!")
                        console.log (`Valor da compra R$${value}`)
                        console.log ("Cupom de 25% de desconto")
                        console.log (`Valor total da compra R$${value -(value * 0.25)}`)
                }
        }

        if(isFirstPurchase && !isCashPayment){
                if(value > 1000){ 
                        console.log ("Agradecemos pela compra, Volte sempre!")
                        console.log (`Valor da compra R$${value}`)
                        console.log ("Cupom de 20% de desconto")
                        console.log (`Valor total da compra R$${value -(value * 0.2)}`)
                }
                else if (value < 500){ 
                        console.log ("Agradecemos pela compra, Volte sempre!")
                        console.log (`Valor da compra R$${value}`)
                        console.log ("Cupom de 10% de desconto")
                        console.log (`Valor total da compra R$${value -(value * 0.1)}`)
                }
                else { 
                        console.log ("Agradecemos pela compra, Volte sempre!")
                        console.log (`Valor da compra R$${value}`)
                        console.log ("Cupom de 15% de desconto")
                        console.log (`Valor total da compra R$${value -(value * 0.15)}`)
                }
        }

        if(!isFirstPurchase && isCashPayment){
                if(value > 1000){ 
                        console.log ("Agradecemos pela compra, Volte sempre!")
                        console.log (`Valor da compra R$${value}`)
                        console.log ("Cupom de 20% de desconto")
                        console.log (`Valor total da compra R$${value -(value * 0.2)}`)
                }
                else if (value < 500){ 
                        console.log ("Agradecemos pela compra, Volte sempre!")
                        console.log (`Valor da compra R$${value}`)
                        console.log ("Cupom de 10% de desconto")
                        console.log (`Valor total da compra R$${value -(value * 0.1)}`)
                }
                else { 
                        console.log ("Agradecemos pela compra, Volte sempre!")
                        console.log (`Valor da compra R$${value}`)
                        console.log ("Cupom de 15% de desconto")
                        console.log (`Valor total da compra R$${value -(value * 0.15)}`)
                }
        }

        if(!isFirstPurchase && !isCashPayment){
                if(value > 1000){
                        console.log ("Agradecemos pela compra, Volte sempre!")
                        console.log (`Valor da compra R$${value}`)
                        console.log ("Cupom de 10% de desconto")
                        console.log (`Valor total da compra R$${value -(value * 0.1)}`)
                }
                else if (value < 500){
                        console.log ("Agradecemos pela compra, Volte sempre!")
                        console.log (`Valor total da compra R$${value}`)
                        console.log (`Você ganhou um cupom de desconto de ${(Math.random(Math.ceil) * (20 - 10) + 10).toFixed(0)}% para sua próxima compra`)
                }
                else { 
                        console.log ("Agradecemos pela compra, Volte sempre!")
                        console.log (`Valor da compra R$${value}`)
                        console.log ("Cupom de 5% de desconto")
                        console.log (`Valor total da compra R$${value -(value * 0.05)}`)
                }
        }
}


calculateDiscount ("Maria" ,1100 ,true ,true)
console.log()
calculateDiscount ("João" ,770 ,true ,true)
console.log()
calculateDiscount ("Pedro" ,430 ,true ,true)
console.log()

calculateDiscount ("Marta" ,1300 ,true ,false)
console.log()
calculateDiscount ("Marcos" ,590 ,true ,false)
console.log()
calculateDiscount ("Mateus" ,250 ,true ,false)
console.log()

calculateDiscount ("Ana" ,1530 ,false ,true)
console.log()
calculateDiscount ("Tiago" ,810 ,false ,true)
console.log()
calculateDiscount ("Paulo" ,200 ,false ,true)
console.log()

calculateDiscount ("Angelica" ,1020 ,false ,false)
console.log()
calculateDiscount ("Diego" ,950 ,false ,false)
console.log()
calculateDiscount ("Carlos" ,70 ,false ,false)
console.log()
