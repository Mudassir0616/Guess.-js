var msg1 = document.getElementById('message1');
var msg2 = document.getElementById('message2');
var msg3 = document.getElementById('message3');

var answer = Math.floor(Math.random()*20) + 1;

var no_of_guesses = 0;
var guessed_num = [];
function play(){

    var user_guess = document.getElementById("guess").value;

    if(user_guess < 1 || user_guess > 20){
        alert("Please enter number from 1 to 20 !!!")
    }
    else{
        guessed_num.push(user_guess)
        no_of_guesses+= 1;
        
        if(user_guess < answer){
            msg1.textContent = "Your Guess is too low !"
            msg2.textContent = "No. of guesses : " + no_of_guesses;
            msg3.textContent = "Guessed No. are : " + guessed_num;
        }
    
    else if(user_guess > answer){
        msg1.textContent = "Your Guess is too High !"
        msg2.textContent = "No. of guesses : " + no_of_guesses;
        msg3.textContent = "Guessed No. are : " + guessed_num;
    }
    else if(user_guess == answer){
        msg1.textContent = " (: CONGRATULATION  YOU  WON :)"
        msg2.textContent = "The Number was " + answer;
        msg3.textContent = "You Guessed it in " + no_of_guesses + " attempts !";
    }
}
console.log(guessed_num);
}