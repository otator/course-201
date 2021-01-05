'use strict';
var userName = prompt('Enter Your name below');
//console.log("user name:" + userName);
var greetingMessage = 'Hello ' + userName + ', Welcome to About Me page';
alert(greetingMessage);

var score = 0;

//Questions for user to answer.
//Q1
var colorAnswer = prompt('Do you think that black is my favorite color (yes/no), (Y/n)?').toLowerCase();

while(!isValidInput(colorAnswer) || colorAnswer === ''){
  colorAnswer = prompt('Do you think that black is my favorite color (yes/no), (Y/n)?').toLowerCase();

}
if(colorAnswer === 'yes' || colorAnswer === 'y'){
  //console.log("This is correct, my favorite color is black");
  alert('This is correct, my favorite color is black');
  score+=1;
}else{
  //console.log("Wrong, my favorite color is balck");
  alert('Wrong, my favorite color is balck');
}

//Q2
var movieAnswer = prompt('Do you think that my favorite movie is The Prestige (yes/no), (Y/n?)').toLowerCase();
while(!isValidInput(movieAnswer) || movieAnswer === ''){
  movieAnswer = prompt('Do you think that my favorite movie is The Prestige (yes/no), (Y/n?)').toLowerCase();
}
if(movieAnswer === 'yes' || movieAnswer === 'y'){
  //console.log("This is correct, my favorite movie is The Prestige");
  alert('This is correct, my favorite movie is The Prestige');
  score+=1;
}else{
  //console.log("Wrong, my favorite movie is The Prestige");
  alert('Wrong, my favorite movie is The Prestige');
}

//Q3
var androidDevelopingAnswer = prompt('Do you think that I\'m familiar with Android Development(yes/no), (Y/n?)').toLowerCase();
while(!isValidInput(androidDevelopingAnswer) || androidDevelopingAnswer ===''){
  androidDevelopingAnswer = prompt('Do you think that I\'m familiar with Android Development(yes/no), (Y/n?)').toLowerCase();
}
if(androidDevelopingAnswer === 'yes' || androidDevelopingAnswer === 'y'){
  //console.log("This is correct, I can develop apps in android");
  alert('This is correct, I can develop apps in android');
  score+=1;
}else{
  //console.log("Wrong, actually I have good experience in android development");
  alert('Wrong, actually I have good experience in android development');
}

//Q4
var germanSpeakAnswer = prompt('Do you think that I can speak German(yes/no), (Y/n?)').toLowerCase();
while(!isValidInput(germanSpeakAnswer) || germanSpeakAnswer ===''){
  germanSpeakAnswer = prompt('Do you think that I can speak German(yes/no), (Y/n?)').toLowerCase();
}
if (germanSpeakAnswer === 'yes' || germanSpeakAnswer === 'y'){
  //console.log("Unfortunately I can NOT speak German");
  alert('Unfortunately I can NOT speak German');
}else{
  //console.log("This is correct I can not speak German");
  alert('This is correct I can not speak German');
  score+=1;
}

//Q5

var leaderAnswer = prompt('Do you think that I am a leader(yes/no), (Y/n?)').toLowerCase();
while(!isValidInput(leaderAnswer) || leaderAnswer ===''){
  leaderAnswer = prompt('Do you think that I am a leader(yes/no), (Y/n?)').toLowerCase();
}
if(leaderAnswer === 'no' || leaderAnswer === 'n'){
  //console.log("Not quiet, I am a good leader, read the page to know about me");
  alert('Not quiet, I am a good leader, read the page to know about me');
}else{
  //console.log("This is right, I am good leader");
  alert('This is right, I am good leader');
  score+=1;
}

//Q6
//var myNumber = 16;
var myNumber = Math.ceil(Math.random() * 29) + 1;
var userGuess;
var i = 1;
var guessed = false;
while(i<5){
  userGuess = parseInt(prompt('Let\'s play a game, Guess a number between 0 and 30'));
  if(userGuess === myNumber){
    //i++
    //console.log("Correct, " + myNumber + " is my number");
    alert('Correct, ' + myNumber + ' is my number');
    guessed = true;
    score+=1;
    break;
  }
  else if (userGuess > myNumber){
    //console.log("Too high");
    i++;
    alert('Too high, tries left ' + (5-i));

  }
  else if(userGuess < myNumber){
    //console.log("Too low");
    i++;
    alert('Too low, tries left ' + (5-i));

  }
  else{
    alert('Invalid input, tries left ' + (5-i));
  }
}
//tell the user the right number if he did not guess it
if(!guessed){
  //console.log("The correct number is: " + myNumber);
  alert('The correct number is: ' + myNumber);
}

//Q7
var programmingLanguages = ['c++', 'java', 'python', 'c#', 'javascript'];
var index = 1;
var userGuessOfLanguage;
var updateUserGuessed ='';
var inputMessage = 'Enter a programming language you think I know';
while (index < 7) {
  userGuessOfLanguage = prompt(inputMessage);
  // eslint-disable-next-line eqeqeq
  if(userGuessOfLanguage === '' || userGuessOfLanguage == null){
    continue;
  }
  else if (searchArray(userGuessOfLanguage.toLowerCase(), programmingLanguages)) {
    //console.log("Correct " + userGuessOfLanguage + " is one of the programming languages i Know");
    alert('Correct ' + userGuessOfLanguage + ' is one of the programming languages i Know');
    score+=1;
    break;
  }
  else {
    index++;
    //console.log("Wrong " + userGuessOfLanguage + " is NOT one of the programming languages i Know, tries left "+ (7-index));
    updateUserGuessed+=userGuessOfLanguage+'\n';
    alert('Wrong Answer');
    inputMessage = 'Your answers are:\n' + updateUserGuessed + '\nEnter a programming language you think I know, tries left ' + (7 -index);
  }
}
var allCorrectAnswers='';
for(var j =0; j<programmingLanguages.length; j++){
  allCorrectAnswers+=programmingLanguages[j]+'\n';
}
alert('Correct answers are:\n'+ allCorrectAnswers);

alert('your score for the seven questions is: ' + score + '/7');

//This function check user input
function isValidInput(message) {
  return message === undefined
        || message === 'yes' || message === 'y' || message === 'no' || message === 'n';
}

//This function searches the array for a specific value, and returns true
// if the value found, and false if not.
function searchArray(value, arr) {
  var size = arr.length;
  var found = false;
  for (var i = 0; i < size; i++) {
    if (arr[i] === value) {
      found = true;
      break;
    }
  }
  return found;
}
