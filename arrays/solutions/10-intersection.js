/**
 * Task description: Write a method that creates an array of unique values that are included in all given arrays
 * Expected Result: ([1, 2], [2, 3]) => [2]
 * Task complexity: 4 of 5
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 */
export const intersection = (...arrays) => {
  const result = arrays[0].filter((element) => {
    const indexOfElement = arrays[1].indexOf(element);
    if (indexOfElement >= 0) {
      return element;
    }
  });
  if (arrays.length > 2) {
    intersection(result, ...arrays.slice(2, arrays.length));
  }
  return Array.from(new Set(result));
};
