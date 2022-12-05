function sentensify(str) {
    // Cambia solo el código debajo de esta línea

    let result = str.split(/[^a-zA-Z]/)
    return result.join(' ');

    // Cambia solo el código encima de esta línea
}

sentensify("May-the-force-be-with-you");