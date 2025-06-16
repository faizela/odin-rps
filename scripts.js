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


function getHumanChoice(userChoice) {
    /*
   input get user choice by prompt as parameter
   return user choice
   for now per top instructions assume user
   enter correct input
    */
   return userChoice
}

let userPrompt = prompt("enter rock or paper or scissors")


