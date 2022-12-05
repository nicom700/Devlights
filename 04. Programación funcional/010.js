Array.prototype.myFilter = function (callback) {
    const newArray = [];
    // Cambia solo el código debajo de esta línea

    this.forEach(item => {
        if (callback(item)) {
            newArray.push(item)
        }
    });

    // Cambia solo el código encima de esta línea
    return newArray;
};