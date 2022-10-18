let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll('input')

function computerPicks() {
    let choices = ['rock', 'paper', 'scissors']
    let numberOfOptions = choices.length
    return choices[Math.floor(Math.random() * numberOfOptions)]
}

function disableButtons(){
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function result(playerPick){
    console.log("in function")
    let computerPick = computerPicks()
    let result = ""
    
    console.log("Player picks" +playerPick + "Computer picks" + computerPick)
    
    // Check first if both picked same options 
    
    if (playerPick == computerPick) {
        result = ("It is a tie. You both chose the same thing"
        + "<br>Player\'s score: " + playerScore + "<br>Computer\'s score: " + computerScore)
    }

    // Individual checks if diff options were picked

    console.log("hindi sya tie")
    switch(playerPick){
        case 'rock':
            if(computerPick == 'scissors') {
                playerScore++
                result = ("You won this round. Computer picked scissors."
                + "<br>Player\'s score: " + playerScore + "<br>Computer\'s score: " + computerScore)
                
            } else {
                computerScore++
                result = ("You lost this round. Computer picked paper."
                + "<br>Player\'s score: " + playerScore + "<br>Computer\'s score: " + computerScore)
            }
            break
        case 'paper':
            if(computerPick == 'rock') {
                playerScore++
                result = ("You won this round. Computer picked rock."
                + "<br>Player\'s score: " + playerScore + "<br>Computer\'s score: " + computerScore)
                
            } else {
                computerScore++
                result = ("You lost this round. Computer picked scissors."
                + "<br>Player\'s score: " + playerScore + "<br>Computer\'s score: " + computerScore)
            }
            break
        case 'scissors':
            if(computerPick == 'paper') {
                playerScore++
                result = ("You won this round. Computer picked paper."
                + "<br>Player\'s score: " + playerScore + "<br>Computer\'s score: " + computerScore)
                
            } else {
                computerScore++
                result = ("You lost this round. Computer picked rock."
                + "<br>Player\'s score: " + playerScore + "<br>Computer\'s score: " + computerScore)
            }
    }
    
    if (playerScore == 5) {
        result += '<br><br>You won. Refresh to try again'
        disableButtons()
    } else if (computerScore == 5) {
        result += '<br><br>You lost. Refresh to try again'
        disableButtons()
    }
        
    document.getElementById('result').innerHTML = result;
    return    
}

buttons.forEach(button =>{
    console.log("in buttonListener")
    button.addEventListener('click', function(){
        result(button.value)
    })
})