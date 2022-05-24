class SonAccount{
    public balanceInit:number;
    public deposit:number;
    public oneWithDraw :number;
    public twoWithDraw :number;

    constructor(balance:number,versamento:number,primoPrelievo:number,secondoPrelievo:number){
        this.balanceInit = balance;
        this.deposit = versamento;
        this.oneWithDraw = primoPrelievo;
        this.twoWithDraw = secondoPrelievo;
    }

      
    public saldoFinale():number{
        return this.deposit - this.oneWithDraw - this.twoWithDraw
    }
}

let son = new SonAccount(0,1000,300,500)
console.log(son);


console.log(son.saldoFinale());


class MotherAccount{
    public balanceInit:number;
    public deposit:number;
    public oneWithDraw :number;
    public twoWithDraw :number;
    protected addInterest:number = 10;

    constructor(balance:number,versamento:number,primoPrelievo:number,secondoPrelievo:number){
        this.balanceInit = balance;
        this.deposit = versamento;
        this.oneWithDraw = primoPrelievo;
        this.twoWithDraw = secondoPrelievo;
        
    }
    

    public saldo():number{
        return this.deposit - this.oneWithDraw - this.twoWithDraw - ((this.oneWithDraw + this.twoWithDraw) * this.addInterest) /100
    }
}

let Mother = new MotherAccount(0,1000,300,500)
console.log(Mother);
console.log(Mother.saldo());







