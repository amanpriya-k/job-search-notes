// JS practice problems

// remember that null is considered an object in JS, so typeof x === "object" won't work

(function () {
  let a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// basically, a will be undefined but b will be defined
// this is because b becomes a global variable, and let a points to b
// however, since a is only defined within the function, it can't be accessed outside

// A semi - reliable way to test whether a number is equal 
// to NaN is with the built -in function isNaN(), 
// but even using isNaN() is an imperfect solution.

