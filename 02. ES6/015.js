const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Cambia solo el código debajo de esta línea

    const failureItems = arr.map(value => `<li class="text-warning">${value}</li>`);

    // Cambia solo el código encima de esta línea

    return failureItems;
}

const failuresList = makeList(result.failure);