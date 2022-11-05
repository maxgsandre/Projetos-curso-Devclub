//4. [ ] Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

function date () {
    
    let currentDate = new Date ();
    let day = currentDate.getDay ();
    let month = (currentDate.getMonth () + 1 ); // O mÊs conta a partir do número 0, por isso é adicionado + 1 EX: 0 = Janeiro, 1 = Fevereiro. 
    let year = currentDate.getFullYear ();
    console.log ("Hoje são " + day + "/" + month + "/" + year)
}

 date()  