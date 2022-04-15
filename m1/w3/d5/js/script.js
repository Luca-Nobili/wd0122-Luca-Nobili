
alert('Trova la calcolatrice :) ')


function aggiungiNumero(bottone){

    let numero = bottone.innerHTML;

    let display = document.querySelector('#display');


    display.value += numero
}

function risultato(){
    let display = document.querySelector('#display');

    let totale = eval(display.value)

    display.value = totale
}

function moltiplicazione(){
    let display = document.querySelector('#display');
    

    display.value += "*"
}

function cancella() { 
    let display = document.querySelector("#display");
    display.value = ""

   }
   console.log(cancella());