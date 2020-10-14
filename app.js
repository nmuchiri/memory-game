// we will store the card values below at the beginning of the game

  let cardFlipped= false
  let firstCard= null
  let secondCard= null
  let count = 0
  let second =30

  const score= document.querySelector(".score")
  const timer= document.querySelector(".timer")
  const cards= document.querySelectorAll(".card")
  const modal = document.querySelector("#my-modal")
  const modalBtn = document.querySelector("#modal-btn")
  const closeBtn = document.querySelector(".close")
  const closeWin = document.querySelector(".win-close")
  const winningModal=document.querySelector("#win-modal")
  const losingModal=document.querySelector("#lose-modal")
  

  modalBtn.addEventListener("click", openModal)
  closeBtn.addEventListener("click", closeModal)
  window.addEventListener("click", outsideClick)
  closeWin.addEventListener("click", closingWin)

   
  function gameAudio(){
    let myAudio = document.createElement("audio")
    myAudio.src = "Memory Game Images/Professor Layton and the Last Time Travel OST The Professor's Trunk (Minicar) (HQ Version).mp3";
    myAudio.pause()
    myAudio.play()
    
  }
  
  
  function openModal() {
    modal.style.display = "block"
    startTimer()
    gameAudio()
  }

  function winModal() {
    winningModal.style.display = "block"
  }

  function closingWin() {
    winningModal.style.display = "none"
    startGame()
  }

  function loseModal() {
    losingModal.style.display = "block"
  }

  function closeModal() {
    modal.style.display = "none"
  }

  function outsideClick(e) {
    if (e.target == modal) {
      modal.style.display = "none"
    }
  }



function startGame(){
  location.reload() 
}

function startTimer(){
  interval = setInterval(function(){
       timer.innerHTML = second+"secs"
      second--
        },1200)
}



 function flipCard () {

    if(this === firstCard){
        return 
    }
    
    this.classList.toggle('flip');
    if(!cardFlipped){
        cardFlipped= true
        firstCard= this 
        console.log(firstCard)
    }else{ // 
        cardFlipped= false
        secondCard= this
        console.log(cardFlipped, secondCard)

    if(firstCard.dataset.id === secondCard.dataset.id){
        firstCard.removeEventListener ("click", flipCard)
        secondCard.removeEventListener ("click", flipCard)
    }else{
        setTimeout(() => {
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
          }, 1000)
        
        } 
        if(firstCard.dataset.id === secondCard.dataset.id){
          count++   
          score.innerHTML = count

    }if(count === 6){
      winModal()

    }
    
  }

 }


  function shuffleCards (){
    cards.forEach(cards=> {
        let randomCard= Math.floor(Math.random()* 12)
        cards.style.order= randomCard

    })

}


document.addEventListener("DOMContentLoaded", ()=>{

    button= document.querySelector(".ResetBoard")
    button.addEventListener ("click", startGame)
    cards.forEach(cards => cards.addEventListener("click", flipCard))
    // shuffleCards()
})
