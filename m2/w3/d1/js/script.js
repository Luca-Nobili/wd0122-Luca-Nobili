function aggiungi() {
    //leggere i dati
    //creare l'utente
   let n = document.querySelector('#nome').value
   let c = document.querySelector('#cognome').value
   let dn = document.querySelector('#nascita').value
    // console.log(utente);
    //inserire utetnte nella tabella
    let utente = new Utente(n, c, dn)

    
        let row = document.createElement("div")
        row.classList.add("row")
        let colNome = document.createElement("div")
        colNome.classList.add("col")
        let colEta = document.createElement("div")
        colEta.classList.add("col")

        colNome.innerText = utente.getFullName()
        colEta.innerText = utente.getEta()

        row.append(colNome, colEta)

        document.querySelector("#table").append(row);
    
}

// let utente = {
//     nome: "Marco",
//     cognome: "Rossi",
//     nascita: new Date("1990/05/04")
// }
class Utente {
    constructor(n, c, dn) {
        this.nome = n
        this.cognome = c
        this.nascita = new Date(dn)
        console.log("Oggetto costruito")
    }

    getFullName() {
        return this.nome + " " + this.cognome
    }

    getEta() {
        let oggi = new Date()
        oggi = oggi.getFullYear()
        return oggi - this.nascita.getFullYear()
    }

    creaHTMLElementoLista(){
        let div  = document.createElement('div')
        div.innerHTML = this.testo.value
        div.classList.add('alert','alert-success')
        
        let deleteButton = this.eliminaHTMLElementoLista(div)
 
  
        div.append(deleteButton)
        this.lista.append(div)
        this.testo.value = ''
     }

    
    
}
 
 