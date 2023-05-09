function functionName(func) {
    if (typeof func === 'function') {
      return "Function name is: "+func.name;
    } else {
      return 'Not a function';
    }
}
  

function greet() {
    console.log('Hello!');
}
  
let square = function(x) {
    return x * x;
}

let num1 = "function"  

console.log(functionName(greet))
console.log(functionName(square))
console.log(functionName(num1))
  