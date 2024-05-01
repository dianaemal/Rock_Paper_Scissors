
var HumanScore = 0
var ComputerScore = 0
function getComputerChoice()
{
    return Math.floor(Math.random()*3)
    // 0 is rock 1 is paper and 2 is sciccor
}


function getHumanChoice()
{
    var choice = prompt("Rock, paper or scissors?");
    switch (choice.toLowerCase())
    {
        case "rock":
            return 0
        case "paper":
            return 1
        case "scissors":
            return 2
        

    }

}


function playRound(humanChoice, computerChoice) 
{
    if ((humanChoice === 0 && computerChoice === 1) ||
    (humanChoice === 1 && computerChoice === 2) ||
    (humanChoice === 2 && computerChoice === 0))
    {
        ComputerScore++;
        return "You lose :("
    }
    else if (humanChoice === computerChoice)
    {
        return "It's a tie!!";
            
    }
    else{
        HumanScore ++;
        return "You win :)"
    }
        
}


function playGame()

{
   
    for (var i = 0; i < 5; i++)
    {
        const computerSelection = getComputerChoice()
        const hummanSelection = getHumanChoice()
        
        playRound(hummanSelection, computerSelection)
        
        console.log(playRound(hummanSelection, computerSelection))

    }
    if (ComputerScore > HumanScore)
    {
        return "You lost the game!!"
    }
    else if (ComputerScore === HumanScore)
    {
        return "Tie!!!"
    }
    else{
        return "Congrats! you won."
    }
    
    
}
console.log(playGame())
