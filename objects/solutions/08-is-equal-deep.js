/**
 * Task description: Write a method that makes a deep compare of two objects
 * Expected Result: True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object} firstObj - Object of any values
 * @param {Object} secondObj - Object of any values
 * @returns {boolean}
 */
function areEqual(obj1, obj2) {
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    const obj1props = Object.keys(obj1);
    const obj2props = Object.keys(obj2);

    if (obj1props.length !== obj2props.length) return false;

    return obj1props.every((key) => {
      if (obj2.hasOwnProperty(key)) {
        if (typeof obj1[key] === "object" && obj1[key] !== null) {
          return areEqual(obj1[key], obj2[key]);
        }
        return obj1[key] === obj2[key];
      }

      return false;
    });
  }
}