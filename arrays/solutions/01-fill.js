/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */
export const fill = (arraySize, value) => new Array(arraySize).fill(value);
//  or
export const fillerSecond = (count, value) => [...value.repeat(count)];
