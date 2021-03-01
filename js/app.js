'use strict';

let userName = prompt('Hello, what is you name');
function welcome (userName){

    alert('Great to see you! '  +  userName +  ' Iam happy you visited my website');
  }
  welcome(userName);
  

//console.log('your name is: ' + userName);




let q1 = prompt ('Do you know me well' +  userName +  'Your answer should be yes , no or Y , N ');
function questionOne() {


  if (q1.toLowerCase() === 'yes' || q1.toUpperCase() === 'Y'){
    alert('Let\'s see..');

  } else{
    alert('I will be glad to meet you, try to guess these questions');
  }

}
questionOne();
//console.log('yourFirst answer is: ' + q1 );




let q2 = prompt ('Do I Wear Glasses All The Time ? .. Your answer should be yes , no or Y , N');

function questionTwo() {
}

if (q2.toLowerCase() === 'yes' || q2.toUpperCase () === 'Y'){
  
  alert('Good one, ' +  userName + '');

} else{

  alert('I hope so, but i need the glasses so your answer is uncorrect .. i wear them all the time');

}
questionTwo();
//console.log('yourSecond answer is: ' + q2 );



let q3 = prompt ('Can i play piano?' +  userName + '..  yes , no or Y , N');

function questionThree() {
  if (q3.toLowerCase() === 'yes' || q3.toUpperCase() === 'Y' ){
    alert('definitely you know somethings about me!!');

  } else{
    alert('You didnt get it, i will play some music for you one day :) ');

  }

}
questionThree();
//console.log('yourThird answer is: ' + q3 );



let q4 = prompt ('Do I Love Coding ? yes , no or Y , N');

function questionFour() {

}

if (q4.toLowerCase() === 'yes' || q4.toUpperCase() === 'Y'){
  alert('Seems you Know me well,'+  userName +'');
} else {
  alert('OOPS uncorrect!' +  userName  + 'I love coding');

}
questionFour();
//console.log('your Forth answer is: ' + q4 );




let q5 = prompt ('Did i work before? '+  userName + ' . .  yes , no or Y , N');

function questionFive() {
}
if (q5.toLowerCase() === 'yes' || q5.toUpperCase() === 'Y'){
    alert('Good Job');
  } else {
    alert('Nup!'+  userName + ' you will know more when you read my bio ');
  
  }
  questionFive();
  //console.log('yourFifth answer is: ' + q5 );


