const rockBtn = document.querySelector('.rock')





function getComputerChoice() {
    // plan how to get random choices uses math.random without arrays
    // no input goal return either rock or paper or scissors 
    // we only used conditionals so far 
    // research math.random 
    let randomInt = Math.floor(Math.random() * 3) + 1
    if (randomInt === 1) {
        return 'rock'
    }
    else if (randomInt === 2) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}


function getHumanChoice() {
    /*
  
   return user choice
   for now per top instructions assume user
   enter correct input
    */
   let userPrompt = prompt("enter rock or paper or scissors")
   return userPrompt.toLowerCase()
}



function playGame() {
   
let humanScore = 0
let computerScore = 0


  function playRound(humanChoice, computerChoice) {
// use humanchoice and computerchoice as args
// console.log winner with msg
// increment the humscore and cpuscore based on winner
if (humanChoice === 'rock' && computerChoice === 'rock'
    || humanChoice === 'paper'  && computerChoice === 'paper'
    || humanChoice === 'scissors' && computerChoice === 'scissors') {
     console.log('It\'s a tie')
    }

else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log('Human wins - Rock beats scissors')
    humanScore++
}

else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log('Human wins - paper beats rock')
    humanScore++
}
else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log('Human wins - scissors beats paper')
    humanScore++
}

else if (computerChoice === 'rock' && humanChoice === 'scissors') {
    console.log('CPU wins - Rock beats scissors')
    computerScore++
}

else if (computerChoice === 'paper' && humanChoice === 'rock') {
    console.log('CPU wins - paper beats rock')
    computerScore++
}  

else if (computerChoice === 'scissors' && humanChoice === 'paper') {
    console.log('CPU wins - scissors beats paper')
     computerScore++
}
}





}

playGame()










