export function median(array) {
	array = [...array].sort((a, b) => a - b);
  let middle = Math.floor(array.length / 2);
  return array.length % 2 !== 0 ? array[middle] : (array[middle - 1] + array[middle]) / 2;
}