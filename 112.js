// Cambia solo el código debajo de esta línea
function countdown(n) {
	return n < 1 ? [] : [n].concat(countdown(n - 1));
}
// Cambia solo el código encima de esta línea