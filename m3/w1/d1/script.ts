let giocatore1:number = Math.floor(Math.random()*99 + 1);
let giocatore2:number = Math.floor(Math.random()*99 + 1);
let scarto1:any
let scarto2:any
console.log(giocatore1);
console.log(giocatore2);


let numerorandom:number = Math.floor(Math.random()*99 + 1)
console.log(numerorandom);


if(giocatore1 == numerorandom ){
    console.log('hai vinto!!');
    
}else{

    scarto1 = Math.abs(numerorandom - giocatore1);
    console.log('Hai perso!!!');
    
    
}

if(giocatore2 == numerorandom ){
    console.log('hai vinto!!');
    
}else{
    scarto2 = Math.abs(numerorandom - giocatore2);
    console.log(('Hai perso!!!'));
    
}

if(scarto1 < scarto2){
    alert("Nessuno dei due ha indovinato il numero casuale, ma il giocatore 1 si é avvicinato di piu! il numero era " + numerorandom);
}
else{
    alert("Nessuno dei due ha indovinato il numero casuale, ma il giocatore 2 si è avvicinato di piu! il numero era " + numerorandom);
}


















