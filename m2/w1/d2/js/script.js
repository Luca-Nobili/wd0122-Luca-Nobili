function inizia() {

    let budget = 1000;
    let oggetti = 0;

    while (budget > 0) {

        let prezzi = Math.floor(Math.random() * 50);

        if (prezzi <= budget) {
            oggetti += 1;
            budget -= prezzi;

            document.getElementById('budget').innerHTML += '<p> soldi spesi: euro ' + prezzi + '<br> budget aggiornato: euro ' + budget + '<p>';
        }

        if (budget <= 0) {
            document.getElementById('messaggio1').innerHTML = 'ATTENZIONE!!!!!!! Hai finito i soldi ';
            
        }

 

    


    document.getElementById('budget').innerHTML += '<p>Hai acquistato: ' + oggetti + ' oggetti </p>';

}

}

