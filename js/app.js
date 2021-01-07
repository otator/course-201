'use strict';
var userName = prompt('Enter Your name below');
var greetingMessage = 'Hello ' + userName + ', Welcome to About Me page';
alert(greetingMessage);

var score = 0;

// added by raghad
var questions = ['Do you think that black is my favorite color (yes/no), (Y/n)?', 'Do you think that my favorite movie is The Prestige (yes/no), (Y/n?)','Do you think that I\'m familiar with Android Development(yes/no), (Y/n?)','Do you think that I can speak German(yes/no), (Y/n?)','Do you think that I am a leader(yes/no), (Y/n?)'];

var answers = ['y','y','y','n','y'];
var answer;
for(var i=0; i< questions.length ; i++){
  answer = prompt(questions[i]);
  answer = validation(answer,questions[i]);
  mainQuestion(answer, questions[i],answers[i]);
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
    alert('Correct, ' + myNumber + ' is my number');
    guessed = true;
    score+=1;
    break;
  }
  else if (userGuess > myNumber){
    i++;
    alert('Too high, tries left ' + (5-i));

  }
  else if(userGuess < myNumber){
    i++;
    alert('Too low, tries left ' + (5-i));

  }
  else{
    alert('Invalid input, tries left ' + (5-i));
  }
}
//tell the user the right number if he did not guess it
if(!guessed){
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

  if(userGuessOfLanguage === '' || userGuessOfLanguage === null){
    continue;
  }
  else if (searchArray(userGuessOfLanguage.toLowerCase(), programmingLanguages)) {
    alert('Correct ' + userGuessOfLanguage + ' is one of the programming languages i Know');
    score+=1;
    break;
  }
  else {
    index++;
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
function mainQuestion(answer,message,rightAnswer) {

  answer = answer.toLowerCase();
  while(answer !== 'y' && answer !== 'n' && answer !== 'yes' && answer !== 'no'){
    answer = prompt(message);
  }

  answer = answer.toLowerCase()[0];
  if(answer === rightAnswer){
    alert('That is  correct');
    score++;
  }else {
    alert('Wrong answer ..');
  }
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


function validation(answer , message ){
  while(answer === null || answer=== undefined || answer=== ''){

    answer = prompt(message);
  }
  return answer;
}
