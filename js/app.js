'use strict';
var userName = prompt("Enter Your name below");
//console.log("user name:" + userName);
var greetingMessage = "Hello " + userName + ", Welcome to About Me page";
alert(greetingMessage);

//Questions for user to answer.
//Q1
var colorAnswer = prompt("Do you think that black is my favorite color (yes/no), (Y/n)?").toLowerCase();

while(!isValidInput(colorAnswer) || colorAnswer === ""){
    colorAnswer = prompt("Do you think that black is my favorite color (yes/no), (Y/n)?").toLowerCase();
    
}
if(colorAnswer === 'yes' || colorAnswer === 'y'){
    //console.log("This is correct, my favorite color is black");
    alert("This is correct, my favorite color is black");
}else{
    //console.log("Wrong, my favorite color is balck");
    alert("Wrong, my favorite color is balck");
}

//Q2
var movieAnswer = prompt("Do you think that my favorite movie is The Prestige (yes/no), (Y/n?").toLowerCase();
while(!isValidInput(movieAnswer) || movieAnswer === ""){
    movieAnswer = prompt("Do you think that my favorite movie is The Prestige (yes/no), (Y/n?").toLowerCase();
}
if(movieAnswer === 'yes' || movieAnswer === 'y'){
    //console.log("This is correct, my favorite movie is The Prestige");
    alert("This is correct, my favorite movie is The Prestige");
}else{
    //console.log("Wrong, my favorite movie is The Prestige");
    alert("Wrong, my favorite movie is The Prestige");
}

//Q3
var androidDevelopingAnswer = prompt("Do you think that I'm familiar with Android Development(yes/no), (Y/n?").toLowerCase();
while(!isValidInput(androidDevelopingAnswer) || androidDevelopingAnswer ===""){
    androidDevelopingAnswer = prompt("Do you think that I'm familiar with Android Development(yes/no), (Y/n?").toLowerCase();
}
if(androidDevelopingAnswer === 'yes' || androidDevelopingAnswer === 'y'){
    //console.log("This is correct, I can develop apps in android");
    alert("This is correct, I can develop apps in android");
}else{
    //console.log("Wrong, actually I have good experience in android development");
    alert("Wrong, actually I have good experience in android development");
}

//Q4
var germanSpeakAnswer = prompt("Do you think that I can speak German(yes/no), (Y/n?").toLowerCase();
while(!isValidInput(germanSpeakAnswer) || germanSpeakAnswer ===""){
    germanSpeakAnswer = prompt("Do you think that I can speak German(yes/no), (Y/n?").toLowerCase();
}
if (germanSpeakAnswer === 'yes' || germanSpeakAnswer === 'y'){
    //console.log("Unfortunately I can NOT speak German");
    alert("Unfortunately I can NOT speak German");
}else{
    //console.log("This is correct I can not speak German");
    alert("This is correct I can not speak German");
}

//Q5

var leaderAnswer = prompt("Do you think that I am a leader(yes/no), (Y/n?").toLowerCase();
while(!isValidInput(leaderAnswer) || leaderAnswer ===""){
    leaderQuestion = prompt("Do you think that I am a leader(yes/no), (Y/n?").toLowerCase();
}
if(leaderAnswer === 'no' || leaderAnswer === 'n'){
    //console.log("Not quiet, I am a good leader, read the page to know about me");
    alert("Not quiet, I am a good leader, read the page to know about me");
}else{
    //console.log("This is right, I am good leader");
    alert("This is right, I am good leader");
}
//This function check user input
function isValidInput(message){
    return message === undefined
    || message === 'yes' || message === 'y' || message === 'no' || message ==='n';
}