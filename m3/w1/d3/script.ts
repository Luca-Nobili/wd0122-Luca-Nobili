//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE

abstract class Lavoratore {
    public redditoAnnuoLordo:number
    public codredd:number
    public tasseInps:number
    public tasseIrepef:number
    constructor(lordo:number, cod:number, inps:number, irpef:number){
        this.redditoAnnuoLordo = lordo,
        this.codredd = cod,
        this.tasseInps = inps
        this.tasseIrepef = irpef
    }
    public getUtileTasse():number{
        return this.redditoAnnuoLordo * this.codredd / 100;
      
    }

    public getTasseInps():number{
        return this.redditoAnnuoLordo * this.tasseInps / 100
    }

    public getTasseIrpef():number{
        return this.redditoAnnuoLordo * this.tasseIrepef / 100
    }



    public abstract getRedditoAnnuoNetto():number
}

//

class Artigiano extends Lavoratore {

   
    public getRedditoAnnuoNetto():number {
        return this.redditoAnnuoLordo - this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef()
    }
}
class LiberoProfessionista extends Lavoratore {
   
    public getRedditoAnnuoNetto():number {
        return this.redditoAnnuoLordo - this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef()
    }
}
class Commerciante extends Lavoratore {
    
    public getRedditoAnnuoNetto():number {
        return this.redditoAnnuoLordo - this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef()
    }
}

let l1 = new Artigiano(10000, 5 , 30, 25);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l2 = new LiberoProfessionista(20000, 8 , 30, 25);
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