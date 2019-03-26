'use strict';

function repeat(fn, n){
  for(let i=0;i<n;i++){
    fn();
  }
}

function hello(){
  console.log('Hello world');
}

function goodbye(){
  console.log('Goodbye world');
}

// repeat(hello, 5);
// repeat(goodbye, 5);


function filter(arr, fn) {
  const newArray = [];

  arr.forEach(element => {
    fn(element) === true ? newArray.push(element) : undefined ;
  });

  return newArray; 
  // // arr = ['Rich', 'Joe', 'Bhaumik', 'Ray']

  // return arr.map(fn); //[true, false, false, true]

}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

//BONUS
console.log(filter(myNames, (name) => name[0] === 'R'));


function hazardWarningCreator(typeOfWarning){
    let warningCounter= 0;

    return function(location){
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
}
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const swanWarning = hazardWarningCreator('Careful of the Black One!');
const marblesWarning = hazardWarningCreator('Lost your Marbles!');

rocksWarning('4th and Boulder');
rocksWarning('5th and Big');
rocksWarning('6th and Bad');
swanWarning('9th and Cypress');
swanWarning('11th and November');
marblesWarning('Pop and Rock St');
