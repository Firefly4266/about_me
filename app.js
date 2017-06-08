'use strict';

var userName = prompt('Welcome to my page.  If you ready to play introduce yourself.');
alert('Nice to meet you ' + userName + '. I am going to ask you some questions about me.  No pressure really?');
console.log('The user name is ' + userName);

let gameCount = 0;
let answer = 'yes';
let wrong = 'no';

let response1 = prompt('Was I a successful Bridge Officer?').toLowerCase();
if (response1 === answer || response1 === answer[0]) {
  alert('You are correct ' + userName + ', I\'d been at it for a while.');
  gameCount++;
}else if (response1 === wrong || response1 === wrong[0]) {
  alert('You are so wrong! ' + userName + ', didn\'t you do your homework?');
}else{
  alert(userName + ', that was not the answer I was expecting...');
}
console.log('The response from ' + userName + ' was ' + response1);

let response2 = prompt('Do I miss being at sea?').toLowerCase();
if (response2 === answer || response2 === answer[0]) {
  alert('You are beyond wrong ' + userName + '! I\'m really happy about not having to leave home for weeks at a time!');
}else if (response2 === wrong || response2 === wrong[0]) {
  alert('That\'s Soooo true ' + userName + '!!! I\'ll never work at sea again if I can help it!');
  gameCount++;
}else{
  alert(userName + ', that was not the answer I was expecting...');
}
console.log('The response from ' + userName + ' was ' + response2);

let response3 = prompt('Am I just bored doing 201 again?').toLowerCase();
if (response3 === answer || response3 === answer[0]) {
  alert('Wrong answer ' + userName + ', I pick something up every time I go through a Code Fellows class.  I love that!');
}else if (response3 === wrong || response3 === wrong[0]) {
  alert('You are correct ' + userName + ', I\'m having fun learning with my cohort.');
  gameCount++;
}else{
  alert(userName + ', you need to answer yes or no...');
}
console.log('The response from ' + userName + ' was ' + response3);

let response4 = prompt('Would I recommend this career path to everyone?').toLowerCase();
if (response4 === answer || response4 === answer[0]) {
  alert('That is incorrect  ' + userName + '. Even though it\'s rewarding, this is a hard path and only those truly dedicated to learning the tech will succeed!');
}else if (response4 === wrong || response4 === wrong[0]) {
  alert('You are correct ' + userName + '. If you have a drive to change your life for the better than this is a very rewarding career path.');
  gameCount++;
}else{
  alert(userName + ', that was not the answer I was expecting...');
}
console.log('The response from ' + userName + ' was ' + response4);

let response5 = prompt('Did I chose to go into the technology industry for the money?').toLowerCase();
if (response5 === answer || response5 === answer[0]) {
  alert('That is incorrect  ' + userName + '. Although the money is good, my primary motivation for the career shift is so I can spend more time being present for my children as they move into adulthood.');
}else if (response5 === wrong || response5 === wrong[0]) {
  alert('You are correct ' + userName + '. Although the money is good, my primary motivation for the career shift is so I can spend more time being present for my children as they move into adulthood.');
  gameCount++;
}else{
  alert(userName + ', if you\'re not going to give real answers let\'s move on to something else.');
}
console.log('The response from ' + userName + ' was ' + response5);

let count = 1;
let spent = 3;
let tree = 5;

alert('Ok ' + userName + ', now let\'s check your binary search skills!  I\'ll give you 4 chances to guess how many fruit trees I have.  I\'ll even tell you if you are too high or too low.');

let response6 = parseInt(prompt('So ' + userName + ', how many fruit trees do I have?'));
while (count < 4) {
  if(isNaN(response6) === false) {
    if (response6 === tree) {
      alert('Excellent Guess ' + userName + '!!!  You are a true binary search ninja!!!');
      gameCount++;
      count = 5;
    }else if (response6 > tree){
      alert('Sorry ' + userName + ', that was too high.  Try again. You have ' + spent + ' tries left.');
      spent--;
      console.log(userName + '\'s answer was ' + response6 +'. The correct answer was 5. Incorrect answer total ' + (4 - spent));
      response6 = parseInt(prompt('So ' + userName + ', how many fruit trees do I have?'));
    }else if (response6 < tree){
      alert('Sorry ' + userName + ', that was too low.  Try again. You have ' + spent + ' tries left.');
      response6 = parseInt(prompt('So ' + userName + ', how many fruit trees do I have?'));
      spent--;
      console.log(userName + '\'s answer was ' + response6 +'. The correct answer was 5. Incorrect answer total ' + (4 - spent));  
    }else {
      alert('Sorry ' + userName + ' that is incorrect.  You have ' + spent + ' tries left.');
      response6 = parseInt(prompt('So ' + userName + ', how many fruit trees do I have?'));
      spent--;
      console.log(userName + '\'s answer was ' + response6 +'. The correct answer was 5. Incorrect answer total ' + (4 - spent)); 
    }
    count++;
  }else {
    alert('Please enter a valid number');
    response6 = parseInt(prompt('So ' + userName + ', how many fruit trees do I have?'));
  }
}

alert('Ok ' + userName + ', it\'s time to shift gears.  Heres a different challenge.');

let states = ['illinois', 'texas','shock', 'massachusetts','grace', 'missouri', 'rhode island', 'disbelief'] ;
let tries = 1;
let triesLeft = 5;
let response = false;

while (response === false) {
  let response7 = prompt(userName + ' Can you guess a state I lived in besides Washington?').toLowerCase();
  if (!isNaN(response7)) {
    alert(userName + ' numbers are vot valid.  Please enter a valid state.');
    response7 = prompt(userName + ' Can you guess a state I lived in besides Washington?').toLowerCase();
  }
  for (let i = 0; i < states.length; i++) {
    if(response7 === states[i]) {
      response = true;
      alert('Great job ' + userName + '!  Your\'re pretty sharp!');
      console.log(userName + ' used ' + tries + ' out of ' + '6 guesses.');
      gameCount++;
    }    
  }
  if(response === false) {
    alert('Sorry ' + userName + ', that is incorrect.  You have ' + triesLeft + ' tries left.');
    console.log('Wrong answer' + (tries));
    tries++;
    triesLeft--;
  }
  if(triesLeft === 0) {
    response = true;
  }
}
if(gameCount > 5) {
  console.log('Congratulations ' + userName + '!  You guessed ' + (gameCount) + ' questions right out of 7');
}else {
  console.log('Too bad ' + userName + ' you really need to sharpen your skills.  May I suggest some classes at Code Fellows?');  
}
