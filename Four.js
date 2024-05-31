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

function countDuplicateItems() {

  const output = {};

  fruits.map((f) => {

    output[f] = (output[f] || 0) + 1

  })

  return output

}

console.log(countDuplicateItems());