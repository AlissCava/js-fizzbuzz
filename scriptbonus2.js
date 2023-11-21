// Seleziona il container nel DOM
const fizzBuzzContainer = document.getElementById('container');

// Stampa i numeri da 1 a 100 con le regole di FizzBuzz
for (let i = 1; i <= 100; i++) {
    let output = '';

    // Verifica se il numero è divisibile per 3 e/o 5
    const isDivisibleBy3 = i % 3 === 0;
    const isDivisibleBy5 = i % 5 === 0;

    // Crea un elemento HTML per il numero o la stringa corretta
    const element = document.createElement('div');
    element.textContent = isDivisibleBy3 && isDivisibleBy5 ? 'FizzBuzz' : isDivisibleBy3 ? 'Fizz' : isDivisibleBy5 ? 'Buzz' : i;

    // Aggiungi una classe al quadrato in base alle condizioni specificate
    if (isDivisibleBy3 && isDivisibleBy5) {
        element.classList.add('pink');
    } else if (isDivisibleBy3) {
        element.classList.add('green');
    } else if (isDivisibleBy5) {
        element.classList.add('red'); 
    } else {
        element.classList.add('blue');
    }

    // Aggiungi la classe "square" a ogni elemento
    element.classList.add('square');


    // Aggiungi l'elemento al container
    fizzBuzzContainer.appendChild(element);
}
