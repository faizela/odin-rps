const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorsBtn = document.querySelector('.scissors')
const resultsDiv  =  document.querySelector('.results')
const scoresDiv = document.querySelector('.scores')
const winnerDiv = document.querySelector('.winner')




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


  function playRound(humanChoice, computerChoice=getComputerChoice()) {
// use humanchoice and computerchoice as args
// console.log winner with msg
// increment the humscore and cpuscore based on winner
if (humanChoice === 'rock' && computerChoice === 'rock'
    || humanChoice === 'paper'  && computerChoice === 'paper'
    || humanChoice === 'scissors' && computerChoice === 'scissors') {
        showResult('It\'s a tie')
    }

else if (humanChoice === 'rock' && computerChoice === 'scissors') {
          showResult('Human wins - Rock beats scissors')
    humanScore++
}

else if (humanChoice === 'paper' && computerChoice === 'rock') {
        showResult('Human wins - paper beats rock')
    humanScore++
}
else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            showResult('Human wins - scissors beats paper')
    humanScore++
}

else if (computerChoice === 'rock' && humanChoice === 'scissors') {
            showResult('CPU wins - Rock beats scissors')
    computerScore++
}

else if (computerChoice === 'paper' && humanChoice === 'rock') {
         showResult('CPU wins - paper beats rock')
    computerScore++
}  

else if (computerChoice === 'scissors' && humanChoice === 'paper') {
  showResult('CPU wins - scissors beats paper')
     computerScore++
}

function showScores() {
    // show cpu and hum score and display in scores div
    scoresDiv.style.border = "30px solid beige"
    scoresDiv.textContent = `human score is ${humanScore} and CPU score is ${computerScore}`
}

showScores()

function showWinner() {
    // plan
    //  check if humscore or cpuscore = 5
    // if hum or cpu === 5 
    // display winner 
    // reset hum and cpu score to 0 and display win msg to empty str
    if (humanScore === 5) {
    winnerDiv.textContent = "Human player wins"
    humanScore = 0;   computerScore = 0; 

    }

    else if (computerScore === 5) {
        winnerDiv.textContent = "CPU wins"
        humanScore = 0;  computerScore = 0;

      
        
    }

   
    



}

showWinner()

}



function handleClick(e) {
    playRound(e.target.className)
}

function showResult(msg){
  const p = document.createElement('p')
    p.textContent = msg
    resultsDiv.appendChild(p)
} 






rockBtn.addEventListener('click', handleClick)
paperBtn.addEventListener('click', handleClick)
scissorsBtn.addEventListener('click', handleClick)




}

playGame()










