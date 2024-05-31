// memoiazation 
function add(...x) {

  return x.reduce((sum, curVal) => sum + curVal)
}

const memo = (func) => {

  let cache = {};

  return function (...x) {

    console.log(cache)

    if (cache[x]) {
      console.log('result from cache');

      return cache[x]

    } else {
      console.log('calculating result');

      const result = func(...x)
      cache[x] = result

      return result
    }

  }

}


const calculate = memo(add)

console.log(calculate(20, 40, 60, 80));
console.log(calculate(20, 40, 60, 80));
