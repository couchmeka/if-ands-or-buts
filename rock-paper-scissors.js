const prompt = require('prompt-sync')({sigint: true});

let player1 = String(prompt("Choose rock, paper, or scissors: "));
let player2 = String(prompt("Choose rock, paper, or scissors: "));
player1 = player1.toLowerCase();
player2 = player2.toLowerCase();

if(player1 === "rock" && player2 === "scissors")
{
    console.log("Player1 WINS!");
} else if (player1 === "scissors" && player2 === "rock")
{
    console.log("Player2 WINS!");
} else if (player1 === "rock" && player2 === "scissors")
{
    console.log("Player1 WINS!");
} else if (player1 === "paper" && player2 === "scissors")
{
    console.log("Player2 WINS!");
} else if (player1 === "scissors" && player2 === "paper")
{
    console.log("Player1 WINS!");
} else if (player1 === "rock" && player2 === "paper")
{
    console.log("Player2 WINS!");
} else if (player1 === "paper" && player2 === "rock")
{
    console.log("Player1 WINS!");
} else if (player1 === "paper" && player2 === "paper")
{
    console.log("draw");
} else if (player1 === "rock" && player2 === "rock")
{
    console.log("draw");
} else if (player1 === "scissors" && player2 === "scissors")
{
    console.log("draw");
} else if (typeof player1 !== "string" || typeof player2 !== "string")
{
    console.log("error");
} else 
{
    console.log("error");
}
