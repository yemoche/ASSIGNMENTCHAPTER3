/* Chapter 3 Topical heading was 'Working with Data' and the types of data.We will begin with Numeric data type*/
/*Declaring variables of Numeric data form,also note that there
is always a technical limit of memory space Numeric data can take */
let number = 1;
let integer = 3.34999;
let nonInteger = -2.4994855;
let basiMoni = 4.8888;
console.log(number)
console.log(typeof integer);

// Another data type is the string Data, examples shown below
let kim = 'Javascript language is fun to learn with DON';
console.log(kim);
let $hashFunction = 'Encrypt your Cookies';
let userName = 'Your name as a placeholder';
let passWord = 'Enter alhphanumeric password';
console.log(typeof userName);
console.log(passWord)

/*Another types of data type is the Boolean data, examples shown 
below , it shows true or false. or 0 or 1. does not use quote */
let theSunIsHot = true;
let theEarthIsFlat = false;
console.log(typeof theSunIsHot);
console.log(theEarthIsFlat);

/*Another Data types is the null data, it stores the intentional absence
of a value, empty but not undefined */
let emptyInside = null;
let hollowSpace = null;
console.log(typeof hollowSpace);
console.log(emptyInside);

/*Another data type is the undefined, a placeholder when a variable
is not declared */
let holdingAnotherInput;
let cost;
console.log(typeof cost);
console.log(holdingAnotherInput);

// OPERATORS
/* We start with the Arithmetric operators, such as Addition(+),Subtract-
ion(-), Multiplication(*), Assignment operator(=),etc */
let amb =5, bam= 6, cam= 9 ;
let dam = amb + bam + cam ;
console.log(dam);
let ank = 5;
let ban = 4;
let can = 2;
let result = ank + (ban * can);
console.log('result =', result);
console.log(result);
/*Note a = a + 4 can be rewritten as a+=4, sum = sum -1 can be rewritten
as sum-=1 */

//Another operator type is the unary operator,examples shown below
let assNil = 5
assNil = assNil + 1; /*longform version, also the original value of assNil =5 is grabbed
first,before 1 is added to it */
console.log(assNil)
let abom = 3;
abom++; //shortterm form of a = a + 1
console.log(abom);
let conny = 1;
++conny; //value of a conny is not grabbed, 1 is added to it immediately
console.log(conny);

// Working with strings and numbers
/* The arithmetric operator is the only one that behaves like strings 
while other operators such as minus, multiplication & division does not */
let adoMen = 4;
let bod = 5;
let sum = adoMen + bod
console.log(sum)
let subT = adoMen - bod;
console.log(subT);
let multi = adoMen * bod;
console.log(multi);
let humanReadings = 'The value of adoMen:' + adoMen + '.The value of bod:' + bod + '.The sum of adoMen and bod:' + sum + '.';
console.log(humanReadings);

// CONDITIONAL STATEMENT & LOGIC
// Starting with the if/else statement
let acco = 5;
let coddy = 8;
let matchPay;

if ( acco == coddy ){
  matchPay = true;
} else {
  matchPay = false;
}
console.log('The matchPay is:', matchPay);
console.log('The matchPay is:'+ matchPay + '.');

// Absolute strict equality, using triple equal signs (===)
 
let access = 5;
let castle = '5';//declaring a string
let dest = 5;
let catchPay;

if ( access == castle ){
  catchPay = true;
} else {
  catchPay = false;
}
console.log('The catchPay is:', catchPay);/*output true for a string data
type of castle */

if ( access == dest ){
  catchPay = true;
} else {
  catchPay = false;
}
console.log('The catchPay is:', catchPay);/*testing for non string data type dest */

//bring strict equality into play

if ( access === castle ){
  catchPay = true;
} else {
  catchPay = false;
}
console.log('The catchPay is:', catchPay);/*output false, as string data type is different from numeric data type */

/* Testing the logical operators AND, OR, NOT(!),greaterthan(>),greaterthanorequalsto(>=)
lessthanorequalsto(<=) and so on */

// Testing for the inequality operators

let ama = 5;
let cama = 10;
let dama = 3;
let coodlePay;

if ( ama > cama ){
  matchPay = true;
} else {
  coodlePay = false;
}
console.log('The coodlePay is:', coodlePay);
if ( cama >= dama ){
  coodlePay = true;
} else {
  coodlePay = false;
}
console.log('The coodlePay is:', coodlePay);
if ( cama >= dama && dama <= ama ){
  coodlePay = true;
} else {
  coodlePay = false;
}
console.log('The coodlePay is:', coodlePay);/* output true, because for AND operator both operand has to be true for a truth value to be allowed */
if ( ama > dama || dama > ama ){
  coodlePay = true;
} else {
  coodlePay = false;
}
console.log('The coodlePay is:', coodlePay);//it will output true because for an OR operator either of the statement is truth, so it picks whichh ever comes first in the line of statement that obeys the OR condition. */

/* XOR operator is a logical test that is carried out on the OR operators
when condition is either correct for one of the OR statemnt and not both */

let ally = 10;
let cally = 20;
let dally = 5;
let dash;

if (( ally == cally || cally == dally ) && (( ally == cally) != (cally == dally))){
  dash = true;
} else {
  dash = false;
}
console.log('The dash is:', dash); //output false

let ado = 5;
let kado = 3;
if (ado!= kado){
  dash = true;
} else {
  dash = false;
}
console.log('The dash is:', dash);

/* TERNARY OPERATORS: these are used in replacing the long form of if/else statement. examples are shown below */
/* To show that a ternary operator means same thing for a single line if/else statement */

let sudy = 5;
let cudy = 10;
let dose = 3;
let moneyBag;

/***if ( sudy > cudy ){
  moneyBag = true;
} else {
  moneyBag = false;
}
console.log('The matchPay was:', matchPay); had to silent the if/else condition to test for the tenary condition***/

cudy > dose ? console.log('The matchPay are:', matchPay): console.log('The moneyBag is:', moneyBag);

/* ARRAY - this is memory space or container set aside to store as few as many items as you like & retrieve one of, some of and all of them */

//Declaring array and some examples of how array can be used

let pens;
pens = ['red', 'Yellow', 'Green', 'Orange'];
console.log(pens);
let selectArrayItems = pens [2];
console.log(selectArrayItems); /* This selects array items by using an index number, index number starts counting from 0 */

// PROPERTIES:
// Get a property of an object by name:
// console.log("Array length: ", pens.length);

console.log('Array length:', pens.length);

// METHODS:
// Reverse the array:
// pens.reverse();

pens.reverse();

// Remove the first value of the array:
// pens.shift();

pens.shift();

// Add comma-separated list of values to the front of the array:
// pens.unshift("purple", "black");

pens.unshift('Indigo', 'Violet');
console.log(pens);

// Remove the last value of the array:
// pens.pop();

pens.pop();
console.log(pens);

// Add comma-separated list of values to the end of the array:
// pens.push("pink", "prussian blue");

pens.push('black', 'ruby', 'lemon');
console.log(pens);

// Find the specified position (pos) and remove n number of items from the array. Arguments: pens.splice(pos,n):
// pens.splice(pos, n) // Starts at the seccond item and removes two items.

console.log(pens);
pens.splice(1,1);
pens.splice(2,1);
console.log(pens);/* This shows that Violet & Yellow has been removed by the splice method */

// console.log("After: ", pens);

console.log('After:', pens);

// Create a copy of an array. Typically assigned to a new variable:
// var newPens = pens.slice();
// console.log("New pens: ", newPens);

let newPens = pens.slice();
console.log('New pens:', newPens);

// Return the first element that matches the search parameter after the specified index position. Defaults to index position 0. Arguments: pens.indexOf(search, index):
// var result = pens.indexOf(search, index);
// console.log("The search result index is: ", result); */

let solution = pens.indexOf('ruby', 1 );
console.log('The search result index is:', solution);/* This prints out the index number of location of ruby, while counting starts from position 1 */

console.log('The item name is:', pens[result]);/* This shows the name of index number 3  */

// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: pens.join(separator):
// var arrayString = pens.join(separator);
// console.log("String from array: ", arrayString);

let arrayString = pens.join();
console.log('String from array:', arrayString);/* This creates a text like format without space. */

let arrayString1 = pens.join(', ');
console.log('String from array:', arrayString1)/* comma (,) and other forms of separators could be used.here the comma was well spaced, */
