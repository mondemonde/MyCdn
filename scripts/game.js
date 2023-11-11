
export function ShuffleDealer()
{

// Instanciate a deck with all cards
var deck = Deck();

// display it in a html container
var $container = document.getElementById('container');
deck.mount($container);

deck.shuffle();
deck.fan();
deck.shuffle();
deck.fan();
deck.shuffle();

}
