var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("s");
var CS = document.getElementById("span1");
var HS = document.getElementById("span2");
var reset = document.getElementById("reset");
var para = document.getElementById("para");
var HumanScore = 0;
var ComputerScore = 0;
var maxRounds = 5;


function getComputerChoice()
{
    return Math.floor(Math.random()*3);
    // 0 is rock 1 is paper and 2 is sciccor
}
function playRound(humanChoice, computerChoice) 
{
    if ((humanChoice === 0 && computerChoice === 1) ||
    (humanChoice === 1 && computerChoice === 2) ||
    (humanChoice === 2 && computerChoice === 0))
    {
        ComputerScore++;
        CS.textContent = String(ComputerScore);
        para.textContent = "You lost this round :("
    }
    else if(humanChoice === computerChoice)
    {
        para.textContent = "It's a tie!!"
    }
    
    else{
        HumanScore ++;
        HS.textContent = String(HumanScore);
        para.textContent = "You won this round :)"
    }
    
    
    maxRounds--;
    if (maxRounds === 0)
    {
        
        gameResult()
        
    }
}   
function gameResult()
{
    
    if (ComputerScore > HumanScore) 
    {
        reset.style.display = "block";
        para.textContent = "You lost the game."
        reset.textContent = "Play Again";
    } 
    else if (ComputerScore === HumanScore)
    {
        reset.style.display = "block";
        para.textContent = "the game is a tie."
        reset.textContent = "Play Again";
    } 
    else 
    {
        reset.style.display = "block";
        para.textContent = "You won the game."
        reset.textContent = "Play Again";
    }
}
function click(humanChoice)
{
    if (maxRounds <= 0)
    {
        alert("game has ended, click 'play agin'.")
    }
    else{
        var compChoice = getComputerChoice();
        playRound(humanChoice, compChoice)
    }
}
rock.addEventListener("click", ()=>{
    click(0)

})
paper.addEventListener("click", ()=>{
    click(1)
        
})
scissors.addEventListener("click", ()=>{
    click(2)
       
        
})
reset.addEventListener("click", ()=>{
    location.reload();
})






