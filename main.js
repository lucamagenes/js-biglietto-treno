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
console.log("costo per chilometri: ", costo_per_chilometri);


//sconto del 20% per i minorenni

if (eta_passeggiero < 18) {
    let sconto_20 = ((costo_per_chilometri * 20) / 100);
    console.log("sconto del 20%: ", sconto_20);
    let prezzo_minorenne = costo_per_chilometri - sconto_20;
    console.log("prezzo del biglietto con sconto del 20%: ", prezzo_minorenne);
}



//sconto del 40% per gli over 65


//prezzo finale