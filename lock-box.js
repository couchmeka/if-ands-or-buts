const prompt = require('prompt-sync')({sigint: true});

let lockBox = Number(prompt("Pick a four digit pin code: "));


if (lockBox === 1234){
    console.log("success")
} else { 
    console.log("failure")
}