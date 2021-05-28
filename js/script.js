var max = 6;
var min = 1;
var Computer = Math.floor(Math.random() * (max - min + 1) + min);
document.getElementById('pc').innerHTML += Computer;

var Utente = Math.floor(Math.random() * (max - min + 1) + min);
document.getElementById('user').innerHTML += Utente;

if (Computer > Utente) {
    risultato = 'Computer vince!';
    document.getElementById('risultato').innerHTML = risultato;

} else if (Utente > Computer) {
    risultato = 'Hai vinto!'
    document.getElementById('risultato').innerHTML = risultato;

}

var risultato = 'Nessun vincitore';
document.getElementById('risultato').innerHTML = risultato;
