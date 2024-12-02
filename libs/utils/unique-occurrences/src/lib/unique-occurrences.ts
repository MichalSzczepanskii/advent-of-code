export function uniqueOccurrences<T>(arr: T[]) {
  const frequency = new Map();
  for (const num of arr) {
    if (frequency.has(num)) frequency.set(num,  frequency.get(num) + 1);
    else frequency.set(num,  1);
  }

  return frequency;
}
