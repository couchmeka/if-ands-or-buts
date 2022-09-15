const prompt = require('prompt-sync')({sigint: true});

let player1 = String(prompt("Choose rock, paper, or scissors: "));
let player2 = String(prompt("Choose rock, paper, or scissors: "));


if(player1 === "rock" && player2 === "scissors")
{
    console.log("Player1 WINS!");
} else if (player1 === "scissors" && player2 === "rock")
{
    console.log("Player2 WINS!");
} else if (player1 === "rock" && player2 === "scissors")
{
    console.log("Player1 WINS!");
} else if(player1 === "paper" && player2 === "scissors")
{
    console.log("Player2 WINS!");
} 
 else if (player1 === "scissors" && player2 === "paper")
{
    console.log("Player1 WINS!");
} else if (player1 === player2){
    console.log("draw");
}