function removeFirstTwo(list) {
    // Cambia solo el código debajo de esta línea
    const [, , ...shorterList] = list; // Cambia esta línea
    // Cambia solo el código encima de esta línea
    return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);