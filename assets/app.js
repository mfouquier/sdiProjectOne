const dealButton = document.querySelector('#deal');

dealButton.addEventListener('click', async function (e) {
  e.preventDefault();
  //const deck = getDeck();

  const deck = getDeck();
  //getCards(deck.data)
  
})

const getCards = (data) => {
  let images = document.getElementsByTagName('img');
  for(let x = 0; x < images.length; x++){
    console.log(images.length)
    images[x].parentNode.removeChild(images[x])
  }

  for (let i = 0; i < data.cards.length; i++) {
    const img = document.createElement('IMG');
    img.src = data.cards[i].image;
    document.body.append(img)
  }
}

//Returns a Promise with a 6 card Deck
const getDeck = () => 
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
  .then(response => {
    if(!response.ok){
      throw new Error(`Status code Error: ${response.status}`)
    }
    return response.json();
  }).then(data => {
    fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=4`)
    .then(response => {
      if(!response.ok){
        throw new Error(`Status code Error: ${response.status}`)
      }
      return response.json();
    }).then(data => {
      getCards(data)
    })
  })

//Saves the blackjack deck promise to be reused
//const deck = getDeck()

//Deals one card at a time
// const initialDealCards = async () => {
//   const deckData = await deck;
//   fetch(`https://deckofcardsapi.com/api/deck/${deckData.deck_id}/draw/?count=4`)
//   .then(response => {
//     if(!response.ok){
//       throw new Error(`Status code Error: ${response.status}`)
//     }
//     return response.json();
//   })
//   .then(data => {
//     const cards = {
//       'dealer': [],
//       'player': []
//     }
//     for(let i = 0; i < data.cards.length; i++){
//       if(i % 2 === 0){
//         cards.dealer.push(data.cards[i].value)
//       } else {
//         cards.player.push(data.cards[i].value)
//       }
//     }
//     return cards;
//   })
// }

//const firstDeal = initialDealCards()


// const checkCardTotal = async () => {
//   const cards = await firstDeal;
//   console.log(firstDeal)
//   console.log(cards)
// }

//checkCardTotal()

//initialDealCards()
