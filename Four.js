// 1) debounce button clicked
const btn = document.getElementById('button')

function debounce(fn, delay) {

  let timeoutId

  return function () {

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      fn()
    }, delay);

  }

}


btn.addEventListener('click', debounce(function () {

  console.log('Clicked');

}, 2000)
);


// 2) count items 
let fruits = ["🥭", "🍈", "🍉", "🍊", "🍎", "🍋", "🥭", "🍒", "🍓", "🍎", "🥭", "🍇"];

function countDuplicatesFruits(data) {

  fruits = {}

  data.map((f) => {

    fruits[f] = (fruits[f] || 0) + 1

  })

  return fruits
}

console.log(countDuplicatesFruits(fruits))

// 3) revarse sentensce 
let str = "I love JavaScript"

function reverseStr(data) {

  Array = data.split(' ')

  let result = Array.map((d) => {
    return d.split('').reverse().join('')
  })

  return result.join(' ')
}

console.log(reverseStr(str))

// 4) sort words 

str = 'JavaScript is a popular language'

function sortWords(data) {

  Array = data.split(' ')

  let result = Array.sort((a, b) => {

    return a.length - b.length
  })

  return result.join(' ')

}

console.log(sortWords(str))