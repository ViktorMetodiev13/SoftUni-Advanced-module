function playingCards(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if (faces[faces.indexOf(face)] == undefined) {
        throw new Error('Error');
    }
    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }


    return faces[faces.indexOf(face)] + suits[suit];
}

console.log(playingCards('A', 'S'));
console.log(playingCards('10', 'H'));
console.log(playingCards('1', 'C'));