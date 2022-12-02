let count = 0;

function cc(card) {
    // Cambia solo el código debajo de esta línea

    if (card > 1 && card < 7) {
        count++;
    }
    else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
        count--;
    }

    if (count <= 0) {
        return (count + " Hold");
    }
    else {
        return (count + " Bet");
    }

    // Cambia solo el código encima de esta línea
}

cc(2); cc(3); cc(7); cc('K'); cc('A');