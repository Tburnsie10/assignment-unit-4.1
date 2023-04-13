console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log( hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello ' + name ;
}
// Remember to call the function to test
console.log(helloName('Nick'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
 console.log(addNumbers(1, 2));

// 4. Function to multiply three numbers & return the result
function multiplyThree(a,b,c){
  return a * b * c;

}
console.log(multiplyThree(2,4,6));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }else
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast( array ) {
  if(array == []){
    return 'undefined';
  }
  return array[array.length - 1];
        
  }

console.log(getLast(['bake', 'cook', 'meal']));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
    for(finder of array) {
      if(value == finder) {
        return true;
      } 
    } return false;

}

//includes -- is the built in array method

let bagel = [];
let dinish = ['reddead', 'Way', 'gallupmalone', 'butler'];
console.log(find('Way', dinish  ));



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return string[0] == letter;


  /* if( letter == string[0]){
    return true;
  } return false; */

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log(isFirstLetter('b', 'tyler'))

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  for(num of array) {
    sum = sum + num;
  }
  
  return sum;
}

console.log(sumAll([3,4,6,8,]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.





function returnPositive(numbers) {
/* I used the filter array method to filter the array for positive numbers only using a function.
   function ex: Array.filter(num => num > 5) the function inside filters any number greater than 5.
*/ 
    console.log(numbers.filter(num => num > 0));
    return numbers.filter(num => num > 0);

} 


console.log(returnPositive(['2', '4', '6', '-2']));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!