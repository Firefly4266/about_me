'use strict';

var states = ['illinois', 'texas','shock', 'massachusetts','grace', 'missouri', 'rhode island', 'disbelief'] ;
var userName, response, gameCount = 0, answer = 'yes', wrong = 'no', count = 1, spent = 3, tree = 5;

function user() {
  userName = prompt('Welcome to my page.  If you ready to play introduce yourself.');
  alert('Nice to meet you ' + userName + '. I am going to ask you some questions about me.  No pressure really? A short series of Yes or No questions.  Please answer Yes (y) or NO (n).');
  console.log('The user name is ' + userName);
}

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


function question6() {
  alert('Ok ' + userName + ', now var\'s check your binary search skills!  I\'ll give you 4 chances to guess how many fruit trees I have.  I\'ll even tell you if you are too high or too low.');
  response = parseInt(prompt('So ' + userName + ', how many fruit trees do I have?'));
  while (count <= 4) {
    if(isNaN(response) === false) {
      if (response === tree) {
        alert('Excellent Guess ' + userName + '!!!  You are a true binary search ninja!!!');
        console.log(userName + ' guessed' + response + ' the answer is ' + tree);
        gameCount++;
        count = 5;
      }else if (response > tree){
        alert('Sorry ' + userName + ', that was too high.  Try again. You have ' + spent + ' tries left.');
        console.log(userName + '\'s answer was ' + response +'. The correct answer was 5. Incorrect answer total ' + (4 - spent));
        spent--;
        response = parseInt(prompt('So ' + userName + ', how many fruit trees do I have?'));
      }else if (response < tree){
        alert('Sorry ' + userName + ', that was too low.  Try again. You have ' + spent + ' tries left.');
        console.log(userName + '\'s answer was ' + response +'. The correct answer was 5. Incorrect answer total ' + (4 - spent));  
        spent--;
        response = parseInt(prompt('So ' + userName + ', how many fruit trees do I have?'));
      }else {
        alert('Sorry ' + userName + ' that is incorrect.  You have ' + spent + ' tries left.');
        console.log(userName + '\'s answer was ' + response +'. The correct answer was 5. Incorrect answer total ' + (4 - spent)); 
        spent--;
        response = parseInt(prompt('So ' + userName + ', how many fruit trees do I have?'));
      }
      count++;
    }else {
      alert('Please enter a valid number');
      response = parseInt(prompt('So ' + userName + ', how many fruit trees do I have?'));
    }
  }
}

var tries = 1, triesLeft = 5;

function question7() {
  alert('Ok ' + userName + ', it\'s time to shift gears.  Heres a different challenge.');
  while (tries < 6) {
    var response = prompt(userName + ' Can you guess a state I lived in besides Washington?').toLowerCase();
    if (isNaN(response) === false) {
      alert(userName + ' your response is not valid.  Please enter a valid state.');
    } else {
      var i;
      for (i = 0; i < 5; i++) {
        if (states.indexOf(response) >= 0) {
          alert('Great job ' + userName + '!  Your\'re pretty sharp!');
          console.log(userName + ' used ' + tries + ' out of 6 guesses.');
          gameCount++;
          return;
        }else {
          alert('Sorry ' + userName + ', that is incorrect.  You have ' + triesLeft + ' tries left.');
          console.log('Wrong answer, ' + userName + '\'s answer was ' + response + '. ' + (tries) + ' guesses used.');
          response = prompt(userName + ' Can you guess one state I lived in besides Washington?').toLowerCase();
          tries++;
          triesLeft--;
        }
      }
      tries = 7;
    }
  }
}

function results(){
  if(gameCount >= 5) {
    console.log(userName + ' answered ' + gameCount + ' questions correctly.');    
    prompt('Congratulations ' + userName + '!  You guessed ' + (gameCount) + ' questions right out of 7');
  }else {
    console.log(userName + ' answered ' + gameCount + ' questions correctly.');
    prompt('Too bad ' + userName + ' you really need to sharpen your skills. You guessed ' + (gameCount) + ' questions right out of 7. Better luck next time.');  
  }
}

// user(userName);
// question1(response);
// question2(response);
// question3(response);
// question4(response);
// question5(response);
// question6(response);
// question7(response);
// results();

