//chiedere all'utente il numero di chilometri che vuole percorrere

const numero_chilometri = Number(prompt("Quanti chilometri vuoi percorrere?"));
console.log("numero chilometri da percorrere: ", numero_chilometri);


//chiedere all'utente l'età del passeggero

const eta_passeggiero = Number(prompt("Quanti anni hai?"));
console.log("anni utente: ", eta_passeggiero);


//prezzo del biglietto

let prezzo_chilometro = 0.21;


//calcolare il prezzo totale del viaggio

let costo_per_chilometri = numero_chilometri * prezzo_chilometro;
console.log("costo per chilometri: ", costo_per_chilometri + "€");


//sconto del 20% per i minorenni

if (eta_passeggiero < 18) {
    let sconto_20 = ((costo_per_chilometri * 20) / 100);
    console.log("sconto del 20%: ", sconto_20 + "€");
    let prezzo_minorenne = (Math.round((costo_per_chilometri - sconto_20) * 100) / 100);
    console.log("prezzo per minorenni: ", prezzo_minorenne + "€");

}


//sconto del 40% per gli over 65

if (eta_passeggiero > 65) {
    let sconto_40 = (costo_per_chilometri * 40) / 100;
    console.log("sconto del 40%: ", sconto_40 + "€");
    let prezzo_over_65 = (Math.round((costo_per_chilometri - sconto_40) * 100) / 100);
    console.log("prezzo over 65: ", prezzo_over_65 + "€");
}
