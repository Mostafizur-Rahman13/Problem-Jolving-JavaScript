const { stringify } = require("querystring");

// memoiazation 
function add(...x) {
  return x.reduce((sum, prev) => sum + prev)
}
// higher order function  
const memo = (func) => {

  let cache = {}

  return function (...x) {

    if (cache[x]) {
      console.log('Result from cache');
      return cache[x]

    } else {
      console.log('Calculting Result');
      let result = func(...x)
      cache[x] = result;
      return result;

    }
  }
}

const calculate = memo(add)


console.log(calculate(10, 20, 40, 60));
console.log(calculate(10, 20, 40, 60));
