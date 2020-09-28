// we will store the card values below at the beginning of the game

let cardFlipped= false
let firstCard= null
let secondCard= null


cards= document.querySelectorAll(".card")
// console.log(cards)

 function flipCard () {

    if(this === firstCard){
        return // prevents the function from removing event listener incase of double clicking the same card
    }
    this.classList.toggle('flip');
    // console.log(this)// here this gives you the div of the object clicked
    // console.log(e.target)// this targets the particular image in the div while this targets the div itself- which has two images within it
    if(!cardFlipped){
        cardFlipped= true // the first card is flipped and cardFlipped is true
        firstCard= this // the element that has fired the event
        console.log(firstCard)
    }else{ // 
        cardFlipped= false// card flipped is switched back to false to prepare for the second click
        // switch this to the second card so that it identifies the next click as second card
        secondCard= this
        console.log(cardFlipped, secondCard)

       

 // check if the cards match by comparing their data set attributes
    // add data attribute to the pictures in HTML dataset is a method for getting the data of the first and second cards you can also use getAttribute according to MDN- line 38. 

    // when the player clicks the first card or the second card we have know which cards they are so we can match them

    // console.log(firstCard.dataset.id)
    // console.log(this.getAttribute("data-id"))
    // this will give the name on the data-set from HTML eg  hat10
    

    // if the data attributes of the cards match then remove the cards by removing the event listener
    if(firstCard.dataset.id === secondCard.dataset.id){
        firstCard.removeEventListener ("click", flipCard)
        secondCard.removeEventListener ("click", flipCard)
       
        resetGame()
    }else{

        // when its not a match remove the flip function so that the cards can flip back again. The set time out function makes sure that they don't flip back immediately
        setTimeout(() => {
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
            resetGame()
          }, 1000);

        } 

    }

  }


  function shuffleCards (){
    cards.forEach(cards=> {
        let randomCard= Math.floor(Math.random()* 12)
        cards.style.order= randomCard

    })

}

shuffleCards()

  function resetGame(){
    [cardFlipped= false];
     [firstCard,secondCard = null, null];
    

}// reset game resets everything to the way it was before the game was played

resetGame()
console.log(resetGame)

document.addEventListener("DOMContentLoaded", ()=>{

    button= document.querySelector(".ResetBoard")
    // console.log(button)
    button.addEventListener ("click", resetGame)
  
    cards.forEach(cards => cards.addEventListener("click", flipCard))// added a click event for both cards using forEach method
   
})
