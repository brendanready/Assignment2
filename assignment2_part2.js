/*
        Brendan Ready
        Assignment 2, Part 2
        FEWD 2
*/

// PART 1:

// STEP 1
/*
var num = prompt('Enter a number.')
console.log(Math.abs(num));
*/

// STEP 2
/*
var num = prompt('Enter a decimal number');
console.log(Math.ceil(num));
*/

// STEP 3
/*
var num = prompt('Enter a decimal number');
console.log(Math.floor(num));
*/

// STEP 4
/*
var numbers = prompt('Enter 5 numbers and separate them using commas with no spaces');
var numArray = numbers.split(",");
var Max = Math.max.apply(Math, numArray);
var Min = Math.min.apply(Math, numArray);
console.log('The smallest number is: ' + Min + '\nThe largest number is: ' + Max);
*/

// STEP 5
/*
var num = prompt('Enter a number.');
console.log(Math.sqrt(num));
*/

// PART 2:

// STEP 6
/*
var date = new Date();
console.log(date);
*/

// STEP 7
/*
var d = new Date();
var m = d.getMonth();
var y = d.getFullYear();
function getDaysInMonth(month,year) {
    return new Date(year, month, 0).getDate();            
}
console.log('Number of Days in Current Month: ' + getDaysInMonth(m+1, y)); 
*/

// STEP 8
/*
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
console.log('Month: ' + months[d.getMonth()]);
*/

// STEP 9
/*
var d = new Date();
if (d.getDay() > 0 && d.getDay() < 6) {
    console.log('It's not the weekend.');
} else {
    console.log('It's the weekend!');
};
*/

// STEP 10
/*
var d = new Date();
var dDay = d.getDay() - 1;
switch (dDay) {
    case 0: 
        console.log('Yesterday was Sunday');
        break;
    case 1: 
        console.log('Yesterday was Monday');
        break;
    case 2: 
        console.log('Yesterday was Tuesday');
        break;
    case 3: 
        console.log('Yesterday was Wednesday');
        break;
    case 4: 
        console.log('Yesterday was Thursday');
        break;
    case 5: 
        console.log('Yesterday was Friday');
        break;
    case 6: 
        console.log('Yesterday was Saturday');
        break;
}
*/

// STEP 11
/*
var d = new Date();
var dDay = d.toDateString().charAt(0);
console.log(dDay);
*/

// PART 3:

// STEP 12
/*
var int1 = prompt('Enter a number.');
var int2 = prompt('Enter another number.');
if (int1 > int2) {
    console.log(int1);
} else {
    console.log(int2);
};
*/

// STEP 13
/*
var student = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
var mark = [80, 77, 88, 95, 68];
var grade = [];
for (var i = 0; i < 5; i++) {
    if (mark[i] >= 90) {
        grade[i] = "A";
    } else if (mark[i] >= 80) {
        grade[i] = "B";
    } else if (mark[i] >= 70) {
        grade[i] = "C";
    } else if (mark[i] <= 60) {
        grade[i] = "D";    
    } else {
        grade[i] = "F"; }
    console.log('Student: ' + student[i] + ' \nMark: ' + mark[i] + ' \nGrade: ' + grade[i])
}
*/

// STEP 14
/*
for (var i = 1; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + ' is even.');
    } else {
        console.log(i + ' is odd.');
    }
}
*/

// STEP 15
/*
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
*/

// PART 4  "Hitchhiker’s Guide to the Galaxy Game"

/*
// STEP 1

var readyMsg = confirm('Are you ready to play the Hitchhiker’s Guide to the Galaxy game?');
if (readyMsg === true) {
    alert('Awesome, our hero is waiting!');
} else {
    alert('Too bad, we’re going to play anyway because our hero desperately needs your help!');
}

// STEP 2

alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…');

// STEP 3

var dirChoice = prompt('Which direction would you like to head (please enter forward, left, or right).');

// STEP 4

switch (dirChoice.toLowerCase()) {
    case "forward":
        alert('You walk about 100 yards and safely make your way out of the cave.');
        break;
    case "left":
        alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.');
        break;
    case "right":
        alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.');
        break;
    default:
        alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.');
}

// STEPS 5 & 6

var userRating = prompt('Please rate this game on a scale of 1 to 10!');

if (userRating < 1 || userRating > 10 || isNaN(userRating)) {
    userRating = 10;
    alert('Thank you, we will continue to make improvements to the game!');
} else if (1 <= userRating && userRating <= 5) {
    alert('Whatever, you weren\'t very good at this game anyway!');
} else if (6 <= userRating && userRating <= 10) {
    alert('Thank you, we will continue to make improvements to the game!');
} else {
    alert('Thank you, we will continue to make improvements to the game!');
}
*/

// PART 5  “Coin Flip Game"

/*
// STEP 1

var coinFlip = Math.random();

// STEP 2

var choice = prompt("Choose Heads or Tails");

// STEP 3

var result;
if (coinFlip < 0.5) {
    result = "heads";
} else {
    result = "tails";
}

// STEP 4

choice = choice.toLowerCase();
if (choice === "heads" && result === "heads") {
    alert("The flip was heads and you chose heads...you win!");
}

// STEP 5

if (choice === "tails" && result === "heads") {
    alert("The flip was heads but you chose tails...you lose!");
}

// STEP 6

if (choice === "heads" && result === "tails") {
    alert("The flip was tails but you chose heads...you lose!");
}

// STEP 7

if (choice === "tails" && result === "tails") {
    alert("The flip was tails and you chose tails...you win!");
}

// STEP 8

coinFlip = Math.round(Math.random());

if (coinFlip == false) {
    result = "heads";
} else {
    result = "tails";
}
console.log (coinFlip);
console.log (result);
*/

// PART 6 “Coin Flip Game Redux "

/*
// STEP 1

var coinFlip;

// STEP 2

for (var i = 1; i <= 10; i++) {
}

// STEP 3

for (var i = 1; i <= 10; i++) {
    coinFlip = Math.round(Math.random());
}

// STEP 4

for (var i = 1; i <= 10; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}
*/

// PART 7 “Coin Flip Streak” 

/*
var coinFlip;                               // STEP 1

do {                                        // STEP 2
    coinFlip = Math.round(Math.random());   // STEP 3
    if (coinFlip === 0) {                   // STEP 4
        console.log("Heads"); 
    } else {
        console.log("Tails"); 
    }
} while (coinFlip === 0);                   // STEP 5 
*/

// PART 8 “Looping a Triangle"

/*
for (var i= 1; i < 8; i++) {
    var hashtag = "#######";
    console.log(hashtag.substring(0, i));
}
*/

// PART 9: "Odd or Even?"

/*
for (i = 0; i < 16; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }
}
*/