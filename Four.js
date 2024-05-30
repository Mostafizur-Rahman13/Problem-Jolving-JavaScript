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