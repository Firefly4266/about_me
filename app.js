'use strict';

var userName;
var response;

function user() {
  userName = prompt('Welcome to my page.  If you ready to play introduce yourself.');
  alert('Nice to meet you ' + userName + '. I am going to ask you some questions about me.  No pressure really? A short series of Yes or No questions.  Please answer Yes (y) or NO (n).');
  console.log('The user name is ' + userName);
}
user(userName);

var gameCount = 0;
var answer = 'yes';
var wrong = 'no';

function question1() {
  response = prompt('Was I a successful Bridge Officer?').toLowerCase();
  if (response === answer || response === answer[0]) {
    alert('You are correct ' + userName + ', I\'d been at it for a while.');
    gameCount++;
  }else if (response === wrong || response === wrong[0]) {
    alert('You are so wrong! ' + userName + ', didn\'t you do your homework?');
  }else{
    alert(userName + ', that was not the answer I was expecting...');
  }
  console.log('The response from ' + userName + ' was ' + response);
}

function question2() {
  response = prompt('Do I miss being at sea?').toLowerCase();
  if (response === answer || response === answer[0]) {
    alert('You are beyond wrong ' + userName + '! I\'m really happy about not having to leave home for weeks at a time!');
  }else if (response === wrong || response === wrong[0]) {
    alert('That\'s Soooo true ' + userName + '!!! I\'ll never work at sea again if I can help it!');
    gameCount++;
  }else{
    alert(userName + ', that was not the answer I was expecting...');
  }
  console.log('The response from ' + userName + ' was ' + response);
}


function question3() {
  response = prompt('Am I just bored doing 201 again?').toLowerCase();
  if (response === answer || response === answer[0]) {
    alert('Wrong answer ' + userName + ', I pick something up every time I go through a Code Fellows class.  I love that!');
  }else if (response === wrong || response === wrong[0]) {
    alert('You are correct ' + userName + ', I\'m having fun learning with my cohort.');
    gameCount++;
  }else{
    alert(userName + ', you need to answer yes or no...');
  }
  console.log('The response from ' + userName + ' was ' + response);
}

function question4() {
  response = prompt('Would I recommend this career path to everyone?').toLowerCase();
  if (response === answer || response === answer[0]) {
    alert('That is incorrect  ' + userName + '. Even though it\'s rewarding, this is a hard path and only those truly dedicated to learning the tech will succeed!');
  }else if (response === wrong || response === wrong[0]) {
    alert('You are correct ' + userName + '. If you have a drive to change your life for the better than this is a very rewarding career path.');
    gameCount++;
  }else{
    alert(userName + ', that was not the answer I was expecting...');
  }
  console.log('The response from ' + userName + ' was ' + response);
}

function question5() {
  var response = prompt('Did I chose to go into the technology industry for the money?').toLowerCase();
  if (response === answer || response === answer[0]) {
    alert('That is incorrect  ' + userName + '. Although the money is good, my primary motivation for the career shift is so I can spend more time being present for my children as they move into adulthood.');
  }else if (response === wrong || response === wrong[0]) {
    alert('You are correct ' + userName + '. Although the money is good, my primary motivation for the career shift is so I can spend more time being present for my children as they move into adulthood.');
    gameCount++;
  }else{
    alert(userName + ', if you\'re not going to give real answers var\'s move on to something else.');
  }
  console.log('The response from ' + userName + ' was ' + response);
}

var count = 1;
var spent = 3;
var tree = 5;

alert('Ok ' + userName + ', now var\'s check your binary search skills!  I\'ll give you 4 chances to guess how many fruit trees I have.  I\'ll even tell you if you are too high or too low.');

var response6 = parseInt(prompt('So ' + userName + ', how many fruit trees do I have?'));
while (count <= 4) {
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

var states = ['illinois', 'texas','shock', 'massachusetts','grace', 'missouri', 'rhode island', 'disbelief'] ;
var tries = 1;
var triesLeft = 5;

while (tries < 6) {
  var response7 = prompt(userName + ' Can you guess a state I lived in besides Washington?').toLowerCase();
  if (isNaN(response7) === false) {
    alert(userName + ' your response is not valid.  Please enter a valid state.');
  } else {
    var i;
    for (i = 0; i < 5; i++) {
      if (states.indexOf(response7) >= 0) {
        alert('Great job ' + userName + '!  Your\'re pretty sharp!');
        console.log(userName + ' used ' + tries + ' out of ' + '6 guesses.');
        gameCount++;
        break;
      }else {
        alert('Sorry ' + userName + ', that is incorrect.  You have ' + triesLeft + ' tries left.');
        console.log('Wrong answer, ' + userName + '\'s answer was ' + response7 + '. ' + (tries) + ' guesses used.');
        response7 = prompt(userName + ' Can you guess one state I lived in besides Washington?').toLowerCase();
        tries++;
        triesLeft--;
      }
    }
    tries = 7;
  }
}

if(gameCount >= 5) {
  console.log('Congratulations ' + userName + '!  You guessed ' + (gameCount) + ' questions right out of 7');
  document.write('Congratulations ' + userName + '!  You guessed ' + (gameCount) + ' questions right out of 7');
}else {
  console.log('Too bad ' + userName + ' you really need to sharpen your skills.  May I suggest some classes at Code Fellows?');
  document.write('Too bad ' + userName + ' you really need to sharpen your skills.  May I suggest some classes at Code Fellows?');  
}

question1(response);
question2(response);
question3(response);
question4(response);
question5(response);
