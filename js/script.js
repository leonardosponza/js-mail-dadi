
var Computer = Math.floor(Math.random()*6) +1 ;
document.getElementById('pc').innerHTML += Computer;

var Utente = Math.floor(Math.random()*6) +1;
document.getElementById('user').innerHTML += Utente;

if (Computer > Utente) {
    risultato = 'Computer vince!';

} else if (Utente > Computer) {
    risultato = 'Hai vinto!'
}
else{
    risultato = 'Nessun vincitore';
}

document.getElementById('risultato').innerHTML = risultato;

/* Uguale a 

if (Computer > Utente) {
    risultato = 'Computer vince!';
    document.getElementById('risultato').innerHTML = risultato;

} else if (Utente > Computer) {
    risultato = 'Hai vinto!'
    document.getElementById('risultato').innerHTML = risultato;
}
else{
    risultato = 'Nessun vincitore';
    document.getElementById('risultato').innerHTML = risultato;
}


*/


