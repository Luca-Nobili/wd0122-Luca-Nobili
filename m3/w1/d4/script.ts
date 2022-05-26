class Abbigliamento{
    id: number;
    codprod:number;
    collezione: string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;

    constructor( id: number,codprod:number,collezione: string,capo:string,modello:number,quantita:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibile:string,saldo:number){
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo
    }

    getSaldoCapo():number{
        let sconto =((this.prezzoivainclusa * this.saldo)/100)
        return sconto
    }


      getAcquistoCapo():number{
          let caposcontato = this.prezzoivainclusa - ((this.prezzoivainclusa * this.saldo)/100)
          return caposcontato
      }  
}

const APPURL = '../Abbigliamento.json'

fetch(APPURL)
.then(res => res.json())
.then(res => {
    let vestiti:Abbigliamento[] = []
    for(let a of res){
        
        a = new Abbigliamento(a.id,a.codprod,a.collezione,a.capo,a.modello,a.quantita,a.colore,a.prezzoivaesclusa,a.prezzoivainclusa,a.disponibile,a.saldo)
       vestiti.push(a)
       
        console.log(a);
       
    }

    console.log(vestiti);

    for(let x of vestiti){
        console.log('sconto vestito:' + x.getSaldoCapo());
       
        
        console.log('prezzo vestito: ' + x.getAcquistoCapo());
        
    }
    
})


