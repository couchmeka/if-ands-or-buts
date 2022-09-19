const prompt = require('prompt-sync')({sigint: true});
let pin =1234;
let lockBox = Number(prompt("Pick a four digit pin code: "));


if (lockBox === pin){
    console.log("success")
} else { 
    console.log("failure")
}