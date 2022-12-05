Array.prototype.myMap = function (callback) {
    const newArray = [];
    // Cambia solo el código debajo de esta línea

    this.forEach(item => newArray.push(callback(item)));

    // Cambia solo el código encima de esta línea
    return newArray;
};