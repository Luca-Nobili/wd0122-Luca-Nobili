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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(s) {
        this.balance = s;
    }
    SonAccount.prototype.deposit = function (s) {
        this.balance += s;
        return s;
    };
    SonAccount.prototype.preleva = function (s) {
        this.balance -= s;
        return s;
    };
    SonAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return SonAccount;
}());
console.log('------------son account----------------- ' + '\n');
// set della proprietÃ  al costruttore
var son = new SonAccount(0);
var son1 = new SonAccount(500);
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
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotherAccount.prototype.interesse = function (s) {
        return s * 0.1;
    };
    MotherAccount.prototype.preleva = function (s) {
        this.balance -= s + this.interesse(s);
        return s;
    };
    return MotherAccount;
}(SonAccount));
var mother = new MotherAccount(0);
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.deposit(1000));
console.log('withdraw:-' + mother.preleva(500));
console.log('withdraw:-' + mother.preleva(400));
console.log('totalBalance:' + mother.getBalance());
