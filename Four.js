// 1) debounce button clicked
const btn = document.getElementById('button')


function debounce(fn, delay) {

  let timeOutId

  return function () {

    if (timeOutId) {
      clearTimeout(timeOutId)
    }
    timeOutId = setTimeout(() => {
      fn()
    }, delay);

  }
}


btn.addEventListener('click', debounce(function () {

  console.log('Clicked')

}, 2000)

);

// 2) count items 
let fruits = ["🥭", "🍈", "🍉", "🍊", "🍎", "🍋", "🥭", "🍒", "🍓", "🍎", "🥭", "🍇"];

function countDuplicateItems(fruits) {

  const output = {};

  fruits.map((f) => {

    output[f] = (output[f] || 0) + 1

  })

  return output

}

console.log(countDuplicateItems(fruits));


// 3) revarse sentensce 
let str = "I love JavaScript"

function reverseStr(str) {

  let Array = str.split(" ")

  let result = Array.map((d) => {

    return d.split("").reverse().join("")

  })

  return result.join(" ")

}

console.log(reverseStr(str));

// 4) sort words 

str = 'JavaScript is a popular language'

function sortWords(str) {

  let Array = str.split(" ")

  Array.sort((a, b) => {

    return a.length - b.length

  })

  return Array.join(" ")

}

console.log(sortWords(str))