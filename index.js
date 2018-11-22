function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach(element => {
    if (Array.isArray(element)) {
      sum += sumItems(element);
    } else {
      sum += element;
    }
  });
  return sum;
}

// return Array.isArray(array) ? array.length === 0 ? 0 : array[0] + sumItems(array.slice(1))

module.exports = sumItems;
