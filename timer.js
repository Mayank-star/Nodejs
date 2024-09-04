// node js timer

// Node js timer function are global function . you dont't need require function to use timer function.

// Set timer functions:

// setImmediate(): It is used to execute setImmediate.
// setInterval(): It is used to define a time interval.
// setTimeout(): ()- It is used to execute a one-time callback after delay milliseconds.

// Clear timer functions:

// clearImmediate(immediateObject): It is used to stop an immediateObject, as created by setImmediate
// clearInterval(intervalObject): It is used to stop an intervalObject, as created by setInterval
// clearTimeout(timeoutObject): It prevents a timeoutObject, as created by setTimeout

function printHello(){
    console.log("Hello !");
}

setInterval(printHello,1000);

var i=0;

setInterval(function(){
    i++;
    console.log('i = ',i);
},1000)

setTimeout(()=>{
    console.log("set timeout");
},1000)


var recursive = function(){
    console.log("recursive calling");
    setTimeout( recursive , 1000);
}
recursive();