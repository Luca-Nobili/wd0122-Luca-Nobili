//function sfondoRosso(e) {


    //e.style.backgroundColor = 'red' // per semplificare il codice sotto in html scrivo this




   // let blocchi = document.getElementsByClassName('blocco')//array di elemnti con la classe blocco
    //blocchi [e].style.backgroundColor = 'red'

//}

function cambiaSfondo(e){

    console.log(e);

    let colore = e.getAttribute('data-colore')
    console.log(colore);

    e.style.backgroundColor = 'colore'

}