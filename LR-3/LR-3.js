// Практична робота №3

// Завдання 1
// Випадкове число від min до max

function random(min, max) {
    return min + Math.random() * (max - min);
}

// Тест:
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );


// Завдання 2
// Перевірка простого числа

function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}

// Тест:
console.log(isPrime(17));
console.log(isPrime(15));


// Завдання 3
// Сума послідовності чисел (рекурсія)

function recursiveSum(n) {
    if (n === 0) return 0;

    if (n > 0) {
        return n + recursiveSum(n - 1);
    } else {
        return n + recursiveSum(n + 1);
    }
}

// Тест:
console.log(recursiveSum(5));
console.log(recursiveSum(-3));