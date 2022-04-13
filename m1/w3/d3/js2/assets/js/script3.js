//funzione mioNome lanciata

function mioNome() {

    console.log('Luca');
    
}

mioNome();

//calcola eta

function calcolaAnni(compleanno) {

    return 2065 - compleanno
    
}

console.log(calcolaAnni(1985))

let anni = calcolaAnni(2037)
console.log(anni);

const calcolaAnni2 = compleanno => 2044 - compleanno

let anni2 = calcolaAnni2(1974)
console.log(anni2);

const pensionamento = (compleanno, nome) => {
    const eta = 2037 - compleanno;
    const anniPensione = 65 - eta;
   
    return `${nome} va in pensione tra ${anniPensione} anni`;
}

console.log(pensionamento(1975, 'Pinco'));
console.log(pensionamento(1980, 'Pallino'));

// funzione 

function quantitaBoiles(belachan, squid) {

    let esca = `ho comprato ${belachan}kg di belachan, e ${squid} kg di squid`

    return esca

   
    
}
console.log(quantitaBoiles(10, 20));
    

function spesaTotale (a,b) {
    
    return a * 10 + b * 20
}

let tot = spesaTotale(15, 10.50)

console.log(tot);


var spedizione = (tot >= 100 ) ? 'spedizione gratuita' : 'spedizione €15'
console.log(spedizione);



function saluti(){

    let ringraziamenti = 'Grazie mille '
    function nome(){
        let frase = ringraziamenti + 'per il tuo ordine'
        return frase;
    }

    return nome();
}
console.log(saluti())






let aumenta = a => a+30;

console.log( aumenta(10) )

let moltiplica = (a,b) => a * b


console.log(moltiplica(10,9));

let divisione = (a,b) => console.log(a / b); 

divisione(10,15)

















