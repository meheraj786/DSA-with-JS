function insertion(array, newData, position) {
  console.log("before", array);
  console.log("New Data", newData);
  console.log("Position", position);

  for (let i = array.length-1; i >= 0; i--) {
    if (i >= position) {
      array[i + 1] = array[i];
      if (i == position) {
        array[i] = newData;
      }
    }
  }
  console.log("Updated Array", array);
}

let data = [20, 30, 40, 10, 30];

insertion(data, 100, 2);
