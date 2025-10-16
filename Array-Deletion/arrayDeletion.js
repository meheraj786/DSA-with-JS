function deletion(array, position) {
  console.log("before", array);
  console.log("Position", position);

  for (let i = position; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  console.log("Updated Array", array);
}

let data = [20, 30, 40, 10, 30];

deletion(data, 2);
