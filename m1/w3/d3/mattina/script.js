let num = 5
let string = 'test'
let bool = true
let arr = []
let obj = {}

console.log(
    typeof num,
    typeof string,
    typeof bool,
    typeof arr,
    typeof obj
);

if (typeof num == 'number') {
    console.log('è un numero');
}

let num1 = 1
let num2 ='1'
console.log(num1 == num2);// vero se i tipi di dato se sono diversi ma i valori sono uguali
console.log(num1 === num2);// falso perchè devono essere indentici anvhe i tipi di dato sono diversi 
console.log(num1 != num2);// falso perche il valore e diverso 
console.log(num1 !== num2);// falso perche sono diversi 

let conferma = promt('scrivi lu tua eta') >= 18? 'sei maggiorenne':'sei minorenne'
document.write(conferma) 