'use strict';

let userName = prompt('Welcome to my page.  If you ready to play introduce yourself.');
alert('Nice to meet you ' + userName + '. I am going to ask you some questions about me.  No pressure really?');
console.log('The user name is ' + userName);


let answer = 'yes';
let wrong = 'no';

let response1 = prompt('Was I a successful Bridge Officer?').toLowerCase();
if (response1 === answer || response1 === answer[0]) {
  alert('You are correct ' + userName + ', I\'d been at it for a while.');
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
}else{
  alert(userName + ', that was not the answer I was expecting...');
}
console.log('The response from ' + userName + ' was ' + response2);


let response3 = prompt('Am I just bored doing 201 again?').toLowerCase();
if (response3 === answer || response3 === answer[0]) {
  alert('Wrong answer ' + userName + ', I pick something up every time I go through a Code Fellows class.  I love that!');
}else if (response3 === wrong || response3 === wrong[0]) {
  alert('You are correct ' + userName + ', I\'m having fun learning with my cohort.');
}else{
  alert(userName + ', you need to answer yes or no...');
}
console.log('The response from ' + userName + ' was ' + response3);


let response4 = prompt('Would I recommend this career path to everyone?').toLowerCase();
if (response4 === answer || response4 === answer[0]) {
  alert('That is incorrect  ' + userName + '. Even though it\'s rewarding, this is a hard path and only those truly dedicated to learning the tech will succeed!');
}else if (response4 === wrong || response4 === wrong[0]) {
  alert('You are correct ' + userName + '. If you have a drive to change your life for the better than this is a very rewarding career path.');
}else{
  alert(userName + ', that was not the answer I was expecting...');
}
console.log('The response from ' + userName + ' was ' + response4);

let response5 = prompt('Did I chose to go into the technology industry for the money?').toLowerCase();
if (response5 === answer || response5 === answer[0]) {
  alert('That is incorrect  ' + userName + '. Although the money is good, my primary motivation for the career shift is so I can spend more time being present for my children as they move into adulthood.');
}else if (response5 === wrong || response5 === wrong[0]) {
  alert('You are correct ' + userName + '. Although the money is good, my primary motivation for the career shift is so I can spend more time being present for my children as they move into adulthood.');
}else{
  alert(userName + ', if you\'re not going to give real answers I\'m done!');
}
console.log('The response from ' + userName + ' was ' + response5);
