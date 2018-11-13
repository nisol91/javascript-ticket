var anni = parseInt(prompt('Ciao, quanti anni hai?'));
var km = parseInt(prompt('Quanto misura il tuo percorso? (in km)'));
// var km = Math.floor(Math.random() * 100)
// console.log(km);
var costoUnitario = 0.21
var ris = costoUnitario * km;
var risMin = ris * 0.8
var risSenior = ris * 0.6;

if (anni < 18 && anni >= 1) {
document.getElementById('result').innerHTML = 'Hai ' + anni + ' anni. ' + 'Sei minorenne: pagherai ' + risMin + ' euro.';
} else if (Number.isNaN(anni) || Number.isNaN(km)) {
document.getElementById('result').innerHTML = 'Devi inserire i valori corretti.';
} else if (anni === 0 || km === 0) {
document.getElementById('result').innerHTML = 'Devi inserire i valori corretti.';
} else if (anni >= 65) {
document.getElementById('result').innerHTML = 'Hai ' + anni + ' anni. ' + 'Sei senior: pagherai ' + risSenior + ' euro.' ;
} else if (anni >= 18 && anni < 65) {
document.getElementById('result').innerHTML = 'Hai ' + anni + ' anni. ' + 'Non puoi usufruire di nessuno sconto. Pagherai ' + ris + ' euro.' ;
}
