var SonAccount = /** @class */ (function () {
    function SonAccount(balance, versamento, primoPrelievo, secondoPrelievo) {
        this.balanceInit = balance;
        this.deposit = versamento;
        this.oneWithDraw = primoPrelievo;
        this.twoWithDraw = secondoPrelievo;
    }
    SonAccount.prototype.saldoFinale = function () {
        return this.deposit - this.oneWithDraw - this.twoWithDraw;
    };
    return SonAccount;
}());
var son = new SonAccount(0, 1000, 300, 500);
console.log(son);
console.log(son.saldoFinale());
var MotherAccount = /** @class */ (function () {
    function MotherAccount(balance, versamento, primoPrelievo, secondoPrelievo) {
        this.addInterest = 10;
        this.balanceInit = balance;
        this.deposit = versamento;
        this.oneWithDraw = primoPrelievo;
        this.twoWithDraw = secondoPrelievo;
    }
    MotherAccount.prototype.saldo = function () {
        return this.deposit - this.oneWithDraw - this.twoWithDraw - ((this.oneWithDraw + this.twoWithDraw) * this.addInterest) / 100;
    };
    return MotherAccount;
}());
var Mother = new MotherAccount(0, 1000, 300, 500);
console.log(Mother);
console.log(Mother.saldo());
