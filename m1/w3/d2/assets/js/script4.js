const nome = 'Luca';
var cognome = 'Nobili';
let eta = 36;
const anno = 1985;

console.log(nome, cognome, eta, anno);


function dati() {
    
    return(nome  + ' ' + cognome + ' ' + ' ' + eta + ' ' + anno)
}

dati()
console.log(dati);
document.write(dati())



let primoLavoro = 'Commesso'
let secondoLavoro = 'Decoratore'


let lavoro = primoLavoro + ' e ' + secondoLavoro

console.log('Il miei lavori sono ' + primoLavoro + " e " + secondoLavoro);



let hobby = 'Pescare' 
console.log(hobby)



let a = 30
let b = a
let somma = a + b
console.log(somma)


let x = 25
let y = 15
let multi = x * y
console.log(multi);


b++
console.log(b);

a - + y + (b*x)
console.log(a - + y + (b*x));

var bool = (x < 40)
console.log(bool);

let bools = (x > 40)
console.log(bools);

if (x < 40){
    console.log('x è minore di 40');
}else{
    console.log('x è maggiore di 40');
}





const info =('Ciao mi chiamo' + ' ' + nome + ' ' + cognome + ' ' + ' ' + 'ho' + ' ' + eta + 'anni' + ' ' + ' ' + 'il tempo libero lo uso per' + ' ' + hobby)
console.log(info);


document.write('Ciao mi chiamo'+ ' ' + nome + ' ' + cognome + ' ' + ' ' + 'ho' + ' ' + eta + 'anni' + ' ' + ' ' + 'il tempo libero lo uso per' + ' ' + hobby)







