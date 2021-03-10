palindromi();

lancioDadi();

// FUNZIONI

function palindromi() {
// chiedo una parola all'utente, di cui trasformo ogni carattere in lower case
  var parolaUtente = prompt("Inserisci una parola palindroma").toLowerCase();
// inserisco la parola nel file html
  document.getElementById("parola-utente").innerHTML = parolaUtente;
// separo la parola
  var parolaUtenteSeparata = parolaUtente.split("");
// inverto le lettere
  var parolaUtenteInversaSeparata = parolaUtenteSeparata.reverse();
// riunisco le lettere
  var parolaUtenteInversa = parolaUtenteInversaSeparata.join("");
// inserisco la parola invertita nel file html
  document.getElementById("parola-inversa").innerHTML = parolaUtenteInversa;
// se i due risultati inseriti nel file html sono uguali tra loro, stampo un messaggio affermativo, in caso contrario dico all'utente di riprovare
  if (parolaUtente == parolaUtenteInversa) {
    document.getElementById("responso-palindroma").innerHTML = "palindroma! Congratulazioni"
  } else {
    document.getElementById("responso-palindroma").innerHTML = "non palindroma! Riprova"
  }

}

function lancioDadi() {
// spiego le regole del gioco
  alert("Scegli tra pari e dispari, dopodichè scegli un numero tra 1 e 5. Se sommato al numero scelto dal computer darà come risultato un numero della categoria scelta, avrai vinto");
// faccio scelgiere tra peri e dispari
  var pariDispari = prompt("Pari o dispari?").toLowerCase();
// mi faccio dare un numero
  var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
// genero un numero casuale tra 1 e 5
  var numeroPc = Math.floor(Math.random() * 5);
// stampo il numero generato per debug
  document.getElementById("numero-pc").innerHTML = numeroPc;
// sommo i due numeri
  var somma = numeroUtente + numeroPc;
// mi accerto che le regole siano state rispettate e stampo il vincitore
  if (numeroUtente >= 1 && numeroUtente <= 5) {
    if (somma % 2 == 0 && pariDispari == "pari") {
      alert("Hai vinto!")
    } else if (somma % 2 == 1 && pariDispari == "dispari"){
      alert("Hai vinto!")
    } else {
      alert("Hai perso!")
    }
  } else {
    alert("Devi darmi un numero tra 1 e 5!")
  }

}
