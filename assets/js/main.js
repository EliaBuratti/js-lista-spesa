/* Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
 */

//creo un ciclo while che mi permette di inserire prodotti fino a quando l'utente non dice che ha finito

let i = 0
while (i < 5) {

    //chiedo all'utente di inserire unprodotto
    const list = prompt('Inserisci il prodotto da aggiungere alla lista della spesa');
    console.log(list);

    //nel caso decido di interrompere l'nserimento prima della richiesta
    if (list === null) {
        break;
    }

    // creo in pagina una lista e ci inserisco il prodotto scritto dall'utente
    const ulShop = document.querySelector('#list_shop');
    ulShop.insertAdjacentHTML('afterbegin',`<li><input type="checkbox"><label>${list}</label></li>`);
     
    i++

    //creo una richiesta che dopo 4 inserimenti chiede se voglio continuare ad inserire
    if (i === 4) {
        const answerList = confirm('vuoi aggiungere altro alla lista?');
        console.log(answerList);
         
        if (answerList === true) {
            i = 0;
            
        } else {
            break;
        }
    }
};
