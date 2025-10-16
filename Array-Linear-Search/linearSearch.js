function linearSearch(array, search) {
  console.log("before", array);
  console.log("Search Data", search);
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == search) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    console.log(`Data found at index ${index}`);
  } else {
    console.log("Data not found");
  }

  return index;
}

let data = [20, 30, 40, 10, 30];

linearSearch(data, 10);
