let data = [20, 30, 40, 10, 30];

function sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
        break;
      }
    }
  }
  console.log("Sorted Array:", array);
}

sort(data);
