'use strict';
let score = 0;

let userName = prompt('Hello, what is you name');
function welcome (userName){

  alert('Great to see you! ' + userName + ' Iam happy you visited my website');
}
welcome(userName);

//console.log('your name is: ' + userName);



// Q number 1
let q1 = prompt ('Do you know me well' + userName + 'Your answer should be yes , no or Y , N ');
function questionOne() {


  if (q1.toLowerCase() === 'yes' || q1.toUpperCase() === 'Y'){
    alert('Let\'s see..');
    score++;

  } else{
    alert('I will be glad to meet you, try to guess these questions');
  }

}
questionOne();
//console.log('yourFirst answer is: ' + q1 );



// Q number 2

let q2 = prompt ('Do I Wear Glasses All The Time ? .. Your answer should be yes , no or Y , N');

function questionTwo() {
}

if (q2.toLowerCase() === 'yes' || q2.toUpperCase () === 'Y')
{ alert('Good one, ' + userName + '');
  score++;

} else{

  alert('I hope so, but i need the glasses so your answer is uncorrect .. i wear them all the time');


}
questionTwo();
//console.log('yourSecond answer is: ' + q2 );


// Q number 3

let q3 = prompt ('Can i play piano?' + userName + '..  yes , no or Y , N');

function questionThree() {
  if (q3.toLowerCase() === 'yes' || q3.toUpperCase() === 'Y' ){
    alert('definitely you know somethings about me!!');
    score++;

  } else{
    alert('You didnt get it, i will play some music for you one day :) ');

  }

}
questionThree();
//console.log('yourThird answer is: ' + q3 );


// Q number 4

let q4 = prompt ('Do I Love Coding ? yes , no or Y , N');
function questionFour() {

}

if (q4.toLowerCase() === 'yes' || q4.toUpperCase() === 'Y'){
  alert('Seems you Know me well,'+ userName +'');
  score++;
} else {
  alert('OOPS uncorrect!' + userName + 'I love coding');
  score = score + 1;

}
questionFour();
//console.log('your Forth answer is: ' + q4 );



// Q number 5

let q5 = prompt ('Did i work before? '+ userName + ' . .  yes , no or Y , N');

function questionFive() {
}
if (q5.toLowerCase() === 'yes' || q5.toUpperCase() === 'Y'){
  alert('Good Job');
  score++;
} else {
  alert('Nup!'+ userName + ' you will know more when you read my bio ');


}
questionFive();
//console.log('yourFifth answer is: ' + q5 );


// Q number 6
let mark = 13;
for (let i = 4; i >= 1; i--) {
  let numUserInput = prompt('try to guess the mark i got in 102 Exam ? hint *between 10-15');
  if (numUserInput == mark) {
    alert(' YES ' + userName + ' correct ');
    score++;
    break;
  } else if (numUserInput > 13) {
    alert('too high 🙊 , i did not have time to study well');
  } else {
    alert('Too Low, try again');
  }
  if (i === 1)
    alert('13 was the correct answer !');


}

// Q number 7

let Singers = ['hamaki', 'mohammad hamaki', 'HAMAKI'];
let hints = ['He is arabic singer', 'he is from egypt', 'he is the best singer ever!!!', 'min al bidaya 2oltilik, come on', 'his name start like my name M','Ya sattar.. stil not get ittt'];
for (let i = 0; i <6; i++) {
  let favSingInput = prompt('try to guess my favourite singer?');
  if (favSingInput === Singers[0] || favSingInput === Singers[1] || favSingInput === Singers[2]) {
    alert('thats true, He is the besttt');
    score++;
    break;
  } else if (favSingInput !== Singers[0] || favSingInput !== Singers[1] || favSingInput !== Singers[2]) {
    console.log(hints[i]);
    alert(hints[i]);

  }

  if (i === 6)
    alert('hamaki', 'mohammad hamaki', 'HAMAKI');
}





if (score === 7) {
  alert('WOOOW Exclent Score 🤩 you got it all right!');
} else {
  alert('GOOD Try, you got: '+ score +'');
}
