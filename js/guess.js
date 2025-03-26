let input = prompt("Guess a number from 1 to 10:");

//CALCULATE A RANDOM INTEGER
let randNum = Math.floor(Math.random()*10)+1;


while(input != randNum){


    if(input > randNum){
        alert(`Your guess was too high! The Random Number is: ${randNum}`);
        input = prompt("Guess lower number from 1 to 10:");
    }

    if(input < randNum){
        alert(`Your guess was too low! The Random Number is: ${randNum}`);
        input = prompt("Guess higher number from 1 to 10:");
    }


}

