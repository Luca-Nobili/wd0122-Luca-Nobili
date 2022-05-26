fetch("Abbigliamento.json")
.then(res => res.json())
.then(res => {
    
console.log(res)
for(let abbigliamento of res){
class Abbigliamento{
    id:number ;
    codprod:number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibilità:string;
    saldo:number;
    constructor(id:number,codprod:number,collezione:string,capo:string,modello:number,quantita:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibilità:string,saldo:number){
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibilità = disponibilità;
        this.saldo = saldo;
    }
    getsaldocapo():number{
        let sconto = ((this.prezzoivainclusa * this.saldo)/100)
        return sconto
    }
    getacquistocapo(){
        let caposcontato = this.prezzoivainclusa - ((this.prezzoivainclusa * this.saldo)/100)
        return caposcontato
    }
}
let vestiti:any = new Abbigliamento(abbigliamento.id,abbigliamento.codprod,abbigliamento.collezione,abbigliamento.capo,abbigliamento.modello,abbigliamento.quantita,abbigliamento.colore,abbigliamento.prezzoivaesclusa,abbigliamento.prezzoivainclusa,abbigliamento.disponibilità,abbigliamento.saldo)

console.log(vestiti)
console.log('sconto: ' + vestiti.getsaldocapo()+'€')
console.log('vestito scontato: ' +'('+ vestiti.prezzoivainclusa +'€'+ ' - ' + vestiti.getsaldocapo() +'€'+') ' +'= '+ vestiti.getacquistocapo()+'€')
}

})