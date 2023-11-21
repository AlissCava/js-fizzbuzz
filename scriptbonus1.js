// Seleziona il container nel DOM
const fizzBuzzContainer = document.getElementById('container');

// Stampa i numeri da 1 a 100 con le regole di FizzBuzz
for (let i = 1; i <= 100; i++) {
    let output = '';

    if (i % 3 === 0) {
        output += 'Fizz';
    }

    if (i % 5 === 0) {
        output += 'Buzz';
    }

    // Se output è vuoto, utilizza il numero
    if (output === '') {
        output = i;
    }

    // Crea un elemento HTML con il numero o la stringa corretta e aggiungilo al container
    const element = document.createElement('p');
    element.textContent = output;
    fizzBuzzContainer.appendChild(element);
}
