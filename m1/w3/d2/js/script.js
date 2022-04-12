/* stringhe */

var saluto = "ciao";
var domanda = "com'è oggi il tempo?";
var doamnda2 = 'com\'è oggi il tempo?';
var html = '<div class="blocco"></div>';
var html2 = "<div class=\"blocco\"></div>";

var nome = 'Giovanni' // valore ipoteticamnete definito dall'utente
var frase = "Ciao " + nome  + " come stai?";
var frase2 = `Ciao ${nome} come stai?`; //backtick

console.log(frase2);
console.log(frase2.length);
console.log(frase[0]);

var ultimoIndice = frase2.length -1;
console.log(frase2 [ ultimoIndice ]);/*sempre ultimo carattere*/

console.log('%c log colorato','color:red;font-size:30px');//come applicare css ai console.log

/*
let e const
*/

const PASSWORD = 'geco1985';
console.log(PASSWORD);
//PASSWORD = 'luca1985'; errore


//const OBJ = {nome:'Mario'} posso modifiacre perche proprieta oggetto
// const OBJ.nome 'Mario'
//console.log(OBJ)

var x = 1; //globale

{
    console.log(x);
}

let y = 2; //blobale

{
    console.log(y);
}


{
    var x2 = 1; //var dentro blocco e sempre globale
    console.log(x2);
}
console.log(x2);


{
    let y2 = 2; //let dentro un blocco è legata a lui 
    console.log(y2);
}

//console.log(y2); errore:y2 non definita

function scriviSaluto(){

    var s = 'Ciao';
    document.write(s)
    return s
}

console.log(scriviSaluto());

scriviSaluto();

/* conversione variabile*/

let num = 4;
let testo ='4'
let prezzo ='4€'

console.log(num + testo);//num viene trasformato in stringa conversione
console.log(num * testo);//testo vieni trasformato in numero e wuindi multiplicato
console.log(num * prezzo);// mi da nan perche deve essere un numero

let bool = false;
let valore = <br> 'il valore della variabile booleana è   + bool'</br>
Document.write(valore)

console.log(num * bool);// se convertito in numero una valore booleana si trasforma in 0 se e false, in 1 se e vero

let booleano = Number(true)
let errore = Number('4a')
let stringa = string(4)
console.log(booleano, errore, stringa);

let arr = ['a','b','c','d',60]
Document.write(arr)// i valori vengono concatenati in una stringa e separati tra lora con un virgola


