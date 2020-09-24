/**
 * Task description: Write a method that makes a deep compare of two objects
 * Expected Result: True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object} firstObj - Object of any values
 * @param {Object} secondObj - Object of any values
 * @returns {boolean}
 */
export const isEqualDeep = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if (firstObjKeys.length === 0 && secondObjKeys.length === 0) {
    return true;
  }

  const compareList = firstObjKeys.map((key) => {
    const valueOfFirstObject = firstObj[key];
    const valueOfSecondObject = secondObj[key];
    if ((Number.isNaN(valueOfFirstObject) && Number.isNaN(valueOfSecondObject))
      || (valueOfFirstObject === null && valueOfSecondObject === null)) {
      return true;
    }
    if (valueOfFirstObject === valueOfSecondObject) {
      return true;
    }
    if (Array.isArray(valueOfFirstObject) && Array.isArray(valueOfSecondObject)) {
      return isArraysEqualDeep(valueOfFirstObject, valueOfSecondObject);
    }
    if (typeof valueOfFirstObject === 'object' && typeof valueOfSecondObject === 'object') {
      return isEqualDeep(valueOfFirstObject, valueOfSecondObject);
    }

    return false;
  });

  return !compareList.includes(false) && !compareList.includes(undefined);
};

const isArraysEqualDeep = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  const compared = firstArray.map((el, id) => {
    if (Array.isArray(el) && Array.isArray(secondArray[id])) {
      return isArraysEqualDeep(el, secondArray[id]);
    }
    if (typeof el === 'object' && typeof secondArray[id] === 'object') {
      return isEqualDeep(el, secondArray[id]);
    }

    return secondArray[id] === el;
  });

  return !compared.includes(false);
};
