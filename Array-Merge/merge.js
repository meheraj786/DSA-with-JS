function merge(array1, array2) {
  let mergedArray = [];

  for (let i = 0; i < array1.length; i++) {
    mergedArray[i] = array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    mergedArray[array1.length + i] = array2[i];
  }
  return mergedArray;
}

const data1 = [2, 3, 5, 7, 21, 8, 53];
const data2 = [56, 5, 7, 2, 45, 8, 3, 23, 7];

console.log(merge(data1, data2));
