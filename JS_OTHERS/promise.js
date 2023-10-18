const orderFood = new Promise((resolve, reject) => {
  setTimeout(() => {
    //
    const isFoodReady = false;
    if (isFoodReady) {
      resolve('The food is ready');
    } else {
      reject('The food is not ready');
    }
  }, 5000);
});
console.log('Placing order...');

orderFood
  .then((food) => {
    console.log('success', food);
  })
  .catch((error) => {
    console.log('error', error);
  });

console.log('Order placed...');
