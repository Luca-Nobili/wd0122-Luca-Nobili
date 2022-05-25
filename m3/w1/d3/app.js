"use strict";
//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE
class Lavoratore {
    constructor(lordo, cod, inps, irpef) {
        this.redditoAnnuoLordo = lordo,
            this.codredd = cod,
            this.tasseInps = inps;
        this.tasseIrepef = irpef;
    }
    getUtileTasse() {
        return this.redditoAnnuoLordo * this.codredd / 100;
    }
    getTasseInps() {
        return this.redditoAnnuoLordo * this.tasseInps / 100;
    }
    getTasseIrpef() {
        return this.redditoAnnuoLordo * this.tasseIrepef / 100;
    }
}
//
class Artigiano extends Lavoratore {
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef();
    }
}
class LiberoProfessionista extends Lavoratore {
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef();
    }
}
class Commerciante extends Lavoratore {
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef();
    }
}
let l1 = new Artigiano(10000, 5, 30, 25);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l2 = new LiberoProfessionista(20000, 8, 30, 25);
console.log('utile tasse LIBERO PROFESSIONISTA:' + l2.getUtileTasse() + '€');
console.log('tasse inps LIBERO PROFESSIONISTA:' + l2.getTasseInps() + '€');
console.log('tasse irpef LIBERO PROFESSIONISTA:' + l2.getTasseIrpef() + '€');
console.log('reddito annuo netto LIBERO PROFESSIONISTA :' + l2.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l3 = new Commerciante(30000, 7, 30, 25);
console.log('utile tasse COMMERCIANTE:' + l3.getUtileTasse() + '€');
console.log('tasse inps COMMERCIANTE:' + l3.getTasseInps() + '€');
console.log('tasse irpef COMMERCIANTE:' + l3.getTasseIrpef() + '€');
console.log('reddito annuo netto COMMERCIANTE:' + l3.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
//# sourceMappingURL=app.js.map