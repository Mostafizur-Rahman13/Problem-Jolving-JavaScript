// 1) Array value replace

let array = [1, 2, 3, 4, 5]

let temp = array[1];
array[1] = array[3];
array[3] = temp;

console.log(array);

[array[1], array[3] = array[3], array[1]]
console.log(array);

let a = 1;
let b = 2;

// [a, b] = [b, a];
// console.log(a, b);

// math format

b = a + (a = b) - b
console.log(a, b);

// 2) destructuring aliases 

const Javascript = {
  name: 'Javascript',
  founded: 1995,
  founder: 'Brendan Eich',
}

const { name: language, founder: creator } = Javascript;
console.log(language, creator);


//3) get value as data type

const number = document.querySelector('.number').valueAsNumber;

console.log(typeof number);

// 4) remove duplicate array

let duplicateArray = [1, 2, 3, 3, 2, 4, 5, 6, 5]

removeDuplicate = [...new Set(duplicateArray)]
console.log(removeDuplicate);

// 5) compare two array

const hasSameElement = (a, b) => {
  return a.length === b.length && a.every((v, i) => v === b[i])
}

console.log(hasSameElement([1, 2], [1, 2]));


