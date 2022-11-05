//3. [ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata!

function date () {
    
    let currentDate = new Date ();
    let hours = currentDate.getHours ();
    let minutes = currentDate.getMinutes ();
    let secconds = currentDate.getSeconds ();
    console.log("Agora são " + hours + ":" + minutes + ":" + secconds + " hs")
}

 date()   