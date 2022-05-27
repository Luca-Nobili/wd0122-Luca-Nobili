"use strict";
class FirstUser {
    constructor(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica = this.carica + unaRicarica;
    }
    chiamata(minutiDurata) {
        this.numeroChiamate++;
        let minutoCostoChiamta = minutiDurata * 0.20;
        if ((this.carica - minutoCostoChiamta) > 0) {
            this.carica = this.carica - minutoCostoChiamta;
        }
        else {
            console.log('Hai finito il credito');
        }
    }
    getNumeroChiamate() {
        console.log('Hai effettuato ' + this.numeroChiamate + ' chiamate');
        return this.numeroChiamate;
    }
    numero404() {
        console.log('Il tuo credito è di: ' + this.carica + '€');
        return this.carica;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
console.log('****** Primo Utente ******');
let Primo = new FirstUser(40, 0);
Primo.chiamata(8);
Primo.chiamata(20);
Primo.chiamata(12);
Primo.chiamata(2);
Primo.chiamata(4);
Primo.getNumeroChiamate();
Primo.numero404();
console.table(Primo);
class SecondUser {
    constructor(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica = this.carica + unaRicarica;
    }
    chiamata(minutiDurata) {
        this.numeroChiamate++;
        let minutoCostoChiamta = minutiDurata * 0.20;
        if ((this.carica - minutoCostoChiamta) > 0) {
            this.carica = this.carica - minutoCostoChiamta;
        }
        else {
            console.log('Hai finito il credito');
        }
    }
    getNumeroChiamate() {
        console.log('Hai effettuato ' + this.numeroChiamate + ' chiamate');
        return this.numeroChiamate;
    }
    numero404() {
        console.log('Il tuo credito è di: ' + this.carica + '€');
        return this.carica;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
console.log('****** Secondo Utente *******');
let Secondo = new SecondUser(25, 0);
Secondo.chiamata(10);
Secondo.chiamata(5);
Secondo.chiamata(8);
Secondo.chiamata(15);
Secondo.getNumeroChiamate();
Secondo.numero404();
console.table(Secondo);
class ThirdUser {
    constructor(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica = this.carica + unaRicarica;
    }
    chiamata(minutiDurata) {
        this.numeroChiamate++;
        let minutoCostoChiamta = minutiDurata * 0.20;
        if ((this.carica - minutoCostoChiamta) > 0) {
            this.carica = this.carica - minutoCostoChiamta;
        }
        else {
            console.log('Hai finito il credito');
        }
    }
    getNumeroChiamate() {
        console.log('Hai effettuato ' + this.numeroChiamate + ' chiamate');
        return this.numeroChiamate;
    }
    numero404() {
        console.log('Il tuo credito è di: ' + this.carica + '€');
        return this.carica;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
console.log('****** Terzo Utente ******');
let Terzo = new ThirdUser(30, 0);
Terzo.chiamata(15);
Terzo.chiamata(6);
Terzo.chiamata(3);
Terzo.chiamata(3);
Terzo.chiamata(6);
Terzo.chiamata(12);
Terzo.getNumeroChiamate();
Terzo.numero404();
console.table(Terzo);
//# sourceMappingURL=app.js.map