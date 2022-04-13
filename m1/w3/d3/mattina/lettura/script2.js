
function aggiungiNumero(bottone){
    
    
    
   let numero = bottone.innerHTML;// e una stringa

   let display = document.querySelector('#display')// selezione che andro a modificare

   display.value += numero // mi aggancio a questo contenuto nella variabile dispaly per modificarne l attributo value provaocando l apparixione dei numeri
   
}

function risultato() {

    let display = document.querySelector('#display')
    
    let totale = eval(display.value)
    
    display.value = totale  

    
}