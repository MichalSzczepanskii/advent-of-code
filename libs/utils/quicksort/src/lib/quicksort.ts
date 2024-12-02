export function quicksort<T>(arr: T[]): T[] {
  if (arr.length < 1) {
    return arr;
  }

  const pivot = arr[0];
  const leftArr = [];
  const rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quicksort(leftArr), pivot, ...quicksort(rightArr)];
}
