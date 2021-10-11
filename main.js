//chiedere all'utente il numero di chilometri che vuole percorrere

const numero_chilometri = Number(prompt("Quanti chilimetri vuoi percorrere?"));
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


//sconto del 40% per gli over 65


//prezzo finale