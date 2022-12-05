const squareList = arr => {
    // Cambia solo el código debajo de esta línea
    return arr
        .filter(n => n > 0 && n % parseInt(n) === 0)
        .map((n) => Math.pow(n, 2));
    // Cambia solo el código encima de esta línea
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);