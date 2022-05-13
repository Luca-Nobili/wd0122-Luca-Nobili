const APPURL = 'users.json'

let tabella = document.querySelector('#utenti')

fetch(APPURL)
.then(res => res.json())
.then(res => {

console.log(res);


let campiVisualizzati = ['username','firstName','lastName','gender','email']

let trH = document.createElement('tr')
for(campo of campiVisualizzati){
let th = document.createElement('th')
th.innerHTML = campo
trH.append(th)
}
tabella.append(trH)


for(let utente of res){

    let tr = document.createElement('tr')

    for(let prop in utente){

        if(campiVisualizzati.includes(prop)){
            let key = prop;
            let value = utente[prop];


            let td = document.createElement('td')

            td.innerHTML = value




            tr.append(td)
}
}


tabella.append(tr)


}

})


