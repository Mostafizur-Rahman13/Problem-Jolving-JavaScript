function delay(i) {

  return new Promise((resolve) => {

    setTimeout(() => {

      return resolve(i)

    }, i * 1000);
  })
}


async function timer(n) {

  console.log('Start Time');

  for (let i = 0; i <= n; i++) {

    const result = await delay();

    console.log(result);

  }

  console.log('End Time');

}

timer(3)