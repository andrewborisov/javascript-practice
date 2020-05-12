/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @param {?} args list of values to remove
 * @returns {Array}
 */
export const without = (array, ...args) => {
  let filteredArray = [...array];

  for (let i = 0; i < args.length; i += 1) {
    filteredArray = filteredArray.filter((el) => el !== args[i]);
  }

  return filteredArray;
};

/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @returns {Array}
 */
export function without2(array) {
  let filteredArray = [...array];

  for (let i = 1; i < arguments.length; i += 1) {
    filteredArray = filteredArray.filter((el) => el !== arguments[i]);
  }

  return filteredArray;
}
