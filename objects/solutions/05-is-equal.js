/**
 * Task description: Write a method that makes a shallow compare of two objects
 * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * Task complexity: 2 of 5
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {boolean}
 */
export const isEqual = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }

  return !firstObjKeys.filter((key) => firstObj[key] !== secondObj[key]).length;
};

/**
 * Task description: Write a method that makes a shallow compare of two objects
 * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * Task complexity: 2 of 5
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {boolean}
 */
export const isEqual2 = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }

  for (const prop in firstObj) {
    if (firstObj.hasOwnProperty(prop) && (firstObj[prop] !== secondObj[prop])) {
      return false;
    }
  }

  return true;
};
