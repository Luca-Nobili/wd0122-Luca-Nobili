/*funzione anonima da sola cosi e inutile 
function () {
    alert('questo alert non si vedra')
}
*/


/*
funzioni parametriche
*/

function getSommapro(a,b) {
    return a + b 
}

function moltiplica(a,b) {
    return a * b 
}


let res1 = getSommapro(3,6)
let res2 = getSommapro(30,6455464)
console.log(res1,res2);

let res3 = moltiplica(res1,res2)
let res4 = moltiplica(4,2)
console.log(res3,res4);

function moltiplica2(a,b,c =5) { // se non do un valore al parametro c , ilsuo valore di deault sa ra 5
    return a * b * c


}

moltiplica2(2,3)// risultato 2*3*5

function moltiplica3(a,b,c =5) { // se non do un valore al parametro c , ilsuo valore di deault sa ra 5
   let terzoValore = c || 5
    return a * b * terzoValore



}

function moltiplica4(a,b,c) { // se non do un valore al parametro c , ilsuo valore di deault sa ra 5
  if(c != undefined){
    return a * b* c
}else{
      return a * b

    
}

}

function moltiplica5(a,b,c) { // se non do un valore al parametro c , ilsuo valore di deault sa ra 5
    if(c != undefined){
      var res = a * b * c
  }else{
        var res = a * b
  
        return res       
  }
  
  }

  

(function () {
    console.log('questo alert non si vedra')// funzione autoinvocante
}
)()


function saluto() {
    let s = 'ciao'
    function nome() {
        let frase = s + 'Mario'
        return frase
    }
    return nome () 
}

console.log(saluto());

function closure(a) {
    return function(b){
        return a * b * c
    }
}

let risultato = closure(2)(4)(3)
console.log(risultato);


//funzioni freccia

function dividi() {
    return 20/2
}

let divisione = () => 20 / 2

console.log(divisione());

let incrementa = a => a + 1 // con un solo parametro sono facoltative
console.log(incrementa(4));


let divisionePro = (a,b) => a / b// con 2 parametri le tonde seono obblicatorie
console.log(divisionePro(4,2));

let divisioneProLog = (a,b) => console.log(a / b);// return implicito non mi crea problrmi se non uso la funzione per restituire dati
divisioneProLog(10,2)


let divisioneProLogEvolution = (a,b) => {//con la presenza delle graffe il return non e piu implicito

let res = a/b
document.write(res)
return res

}


 



 


