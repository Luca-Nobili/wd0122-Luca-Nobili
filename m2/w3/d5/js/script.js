const APPURL = '../users.json'

let tabella = document.querySelector('#utenti')

fetch(APPURL)
.then(res => res.json())
.then(res => {

console.log(res);


let campiVisualizzati = ['username','firstName','lastName','gender','email','photo']

let trH = document.createElement('tr')
for(campo of campiVisualizzati){
let th = document.createElement('th')
th.innerHTML = campo
trH.append(th)
}
tabella.append(trH)


for(let utente of res){

    let tr = document.createElement('tr')
    let tdPhoto = document.createElement("td");
    
    for(let prop in utente){

        if(campiVisualizzati.includes(prop)){
            let key = prop;
            let value = utente[prop];

            let td = document.createElement('td')
            
            tdPhoto.innerHTML = `<img src="${utente.profileURL}" "width=60px height=60px>`;
            td.innerHTML = value

            




            tr.append(td,tdPhoto)
          
}
}


tabella.append(tr)


}

})


