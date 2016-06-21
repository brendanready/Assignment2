/*
        Brendan Ready
        Assignment 2, Part 1
        FEWD 2
*/

// STEP 1
/*
var firstName = prompt('What is your first name?');
alert('Your first name is ' + firstName.length + ' characters long');
*/

// STEP 2
/*
var firstName = prompt('What is your first name?');
var num = prompt("Pick a number less than or equal to the amount of letters in your name.  This will find the letter in your name that this number corresponds to.");
alert(firstName.charAt(num - 1));
*/

// STEP 3
/*
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
alert("Your name is " + firstName + " " + lastName);
*/

// STEP 4
/*
var msg = 'The quick brown fox jumps over the lazy dog';
alert(msg.indexOf('fox'));
*/

// STEP 5
/*
var msg = 'The quick brown fox jumps over the lazy fox';
alert(msg.lastIndexOf('fox'));
*/

// STEP 6
/*
var msg = 'The quick brown fox jumped over the lazy dog';
var fullName = prompt('What is your full name?');
alert(msg.replace('the lazy dog', fullName));
*/

// STEP 7
/*
var msg = 'The quick brown fox jumps over the lazy dog';
var word = prompt('Enter one of the following words from this sentence: The quick brown fox jumps over the lazy dog.');
alert(msg.search(word));
*/

// STEP 8
/*
var old_string = 'The quick brown fox jumps over the lazy dog';
var new_string = old_string.slice(old_string.lastIndexOf('the'), old_string.length);
alert(new_string.toUpperCase());
*/

// STEP 9
/*
var msg = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
alert(msg.trim().toLowerCase());
*/

// STEP 10
/*
var msg = "the quick brown fox jumps over the lazy dog";
alert(msg.replace("the", "The"));
*/

