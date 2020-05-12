/**
 * Task description: Write a method that returns a new object without provided properties
 * Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * Task complexity: 2 of 5
 * @param {Object} object - Any object
 * @param {?} args - list of properties to remove from object
 * @returns {Object} - New object without listed values
 */
export const without = (object, ...args) => {
  const newObject = { ...object };

  args.forEach((arg) => {
    delete newObject[arg];
  });

  return newObject;
};
