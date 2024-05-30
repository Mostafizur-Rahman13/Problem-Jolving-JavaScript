// 1) Array example -- 1

let misecellaneous = ['🍊', false, '🍎', null, '🥭', NaN, '🍍']
let fruits = misecellaneous.filter(Boolean)
console.log(fruits);

// 2) convert any value to boolean 

console.log(!!"Mashrafi");  //convert Boolean ans true
console.log(!!1);
console.log(!!0);
console.log(!!undefined)
console.log(Boolean("Mashrafi"))

// 3) Resizing any Array 

let Flowers = ['🌻', '🌺', '🌼', '🌹'];
Flowers.length = 3
console.log(Flowers);

// 4) We cas use array flat() methord to flattern one level array

let Imoje = ['😀', ['🤣'], '😎', ['😍', '🥰']];
console.log(Imoje.flat());

// 5) Array flat(infinity)

Imoje = ['😀', ['🤣'], '😎', ['😍', ['🥰']]];
console.log(Imoje.flat(Infinity));

// 6) Short condition 

let captain = "Mashrafi"

captain === "Mashrafi" || console.log("😡");


let quote = "React is the framework for web and native user interfaces.Build user interfaces out of individual pieces called components written in JavaScript."

console.log(quote.replace(/framework/g, "library"));

//7) variable consolelog 

let library1 = 'jQuery';
let library2 = 'Reactjs';

console.log({ library1, library2 });


//8) Perfomance Time Count 

let startTime = performance.now()

for (let i = 0; i <= 50; i++) {
  console.log(i);
}

let endTime = performance.now()

console.log(`Total Perfomance Time =${endTime - startTime} Milisecond`);