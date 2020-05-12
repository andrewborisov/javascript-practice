import { isEqualDeep } from './08-is-equal-deep';

/**
 * Task description: Write a method that finds all intersections of objects
 * Expected Result: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object<string | number>} firstObj - Object with values of any data types
 * @param {Object<string | number>} secondObj - Object with values of any data types
 * @returns {Object}
 */
export const intersectionDeep = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);

  return firstObjKeys.reduce((acc = {}, key) => {
    if (firstObj[key] === secondObj[key]) {
      acc = {
        ...acc,
        [key]: firstObj[key],
      };
    }
    if (Array.isArray(firstObj[key]) && Array.isArray(secondObj[key])) {
      const isEqualArrays = isEqualDeep(firstObj[key], secondObj[key]);

      if (isEqualArrays) {
        acc = {
          ...acc,
          [key]: firstObj[key],
        };
      }
    } else if (typeof firstObj[key] === 'object' && typeof secondObj[key] === 'object') {
      const hasIntersection = intersectionDeep(firstObj[key], secondObj[key]);

      if (Object.keys(hasIntersection).length !== 0) {
        acc = {
          ...acc,
          [key]: hasIntersection,
        };
      }
    }
    return acc;
  }, {});
};
