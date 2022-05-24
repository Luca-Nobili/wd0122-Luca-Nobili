/*class SonAccount{
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
console.log(Mother.saldo());*/

class SonAccount{
    balance:number
    constructor(s:number){
        this.balance = s
    }
    deposit(s:number) {
        this.balance += s
        return s
    }
    preleva(s:number) {
        this.balance -= s
        return s
    }
    getBalance(){
        return this.balance
    }
}
console.log('------------son account----------------- ' + '\n');
// set della proprietÃ  al costruttore
let son = new SonAccount(0)
let son1 = new SonAccount(500)
console.log(son.getBalance());
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.deposit(1000));
console.log('withdraw:-' + son.preleva(500));
console.log('withdraw:-' + son.preleva(400));
console.log('totalBalance:' + son.getBalance());
console.log('deposit:+' + son1.deposit(1000));
console.log('withdraw:-' + son1.preleva(500));
console.log('withdraw:-' + son1.preleva(400));
console.log('totalBalance:' + son1.getBalance());

class MotherAccount extends SonAccount {
    private interesse(s:number) {
        return s * 0.1
    }
    preleva(s:number) {
        this.balance -= s + this.interesse(s)
        return s
    }
}
let mother = new MotherAccount(0)
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.deposit(1000));
console.log('withdraw:-' + mother.preleva(500));
console.log('withdraw:-' + mother.preleva(400));
console.log('totalBalance:' + mother.getBalance());







