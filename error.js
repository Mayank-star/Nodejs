// The Node.js applications generally face four types of errors:

// Standard JavaScript errors i.e. <EvalError>, <SyntaxError>, <RangeError>, <ReferenceError>, <TypeError>, <URIError> etc.
// System errors
// User-specified errors
// Assertion errors
 
// Standard JavaScript Errors:

// These are the built-in JavaScript errors that occur during the execution of code, typically due to issues with the logic or syntax. Common types include:
// EvalError: Raised when the eval() function is used improperly.
// SyntaxError: Occurs when the code has incorrect syntax.
// RangeError: Raised when a number is out of range, such as an invalid array length.
// ReferenceError: Happens when trying to reference a variable that is not declared.
// TypeError: Raised when a value is not of the expected type.
// URIError: Occurs when there is an issue with URI handling functions like encodeURI() or decodeURI().

// type error

function add(a,b){
    return a+b;
}

try {
    console.log(add(6,undefined));
} catch (error) {
    console.errorlo("caught a type error : ", error.message);
}

//----------- reference  error

// try {
//     console.log(x);
// } catch (error) {
//     console.error('x is not defined :',error.message);
// }

//------------ system error

const fs = require('fs'); 

// function nodeStyleCallback(err, data) {  
//  if (err) {  
//    console.error('There was an error', err);  
//    return;  
//  }  
//  console.log(data);  
// }  

// fs.readFile('/some/file/that/does-not-exist', nodeStyleCallback);  
// fs.readFile('/some/file/that/does-exist', nodeStyleCallback);  

// try {
//     // Trying to read a non-existent file will cause a system error
//     fs.readFileSync('/path/to/nonexistent/file.txt');
//   } catch (error) {
//     if (error.code === 'ENOENT') {
//       console.error('File not found!');
//     } else {
//       console.error('An error occurred:', error.message);
//     }
//   }

  //---------- user specified error

//   function checkAge(age) {
//     if (age < 18) {
//       throw new Error('User must be 18 or older.');
//     }
//     return 'Access granted';
//   }
  
//   try {
//     console.log(checkAge(16));
//   } catch (error) {
//     console.error('User-specified error:', error.message);
//   }




// --------  Assertion error



// const assert = require('assert');

// function sum(a, b) {
//   return a + b;
// }

// try {
//   // This will throw an AssertionError because the sum is not 10
//   assert.strictEqual(sum(2, 2), 10, 'Sum does not match expected value');
// } catch (error) {
//   console.error('Caught an AssertionError:', error.message);
// }