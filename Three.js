//1) Tag template Liteture
function myFunction() {
  return 'Bangladesh';
}
const string = myFunction`Dhaka`;
console.log(string);

//2) template liteture argument length 
function b() {
  console.log(`The length is ${this.length}`);
}

const a = {
  length: 10,
  method: function (b) {
    arguments[0]();
  }
}
a.method(b, 5)

//3) summ blank array
const array = [] + []
console.log(array);

console.log({} + []);
//4) st properties constructor properti access
const st = 'constructor';
console.log(st[st](01));

//5) floting point number convertotion 
console.log(0.1 + 0.2);

//6) prototype 
console.log(("Bangladesh").__proto__.__proto__.__proto__);

//7) make e function that sorts it's argument without loops

const sortFunction = function () {
  return [].slice.call(arguments).sort()
}

console.log(sortFunction(2, 1, 3, 4, 5))