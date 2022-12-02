// Declara la variable myGlobal debajo de esta línea

function fun1() {
    oopsGlobal = 5;
}
let myGlobal = 10;

// Cambia solo el código encima de esta línea

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}