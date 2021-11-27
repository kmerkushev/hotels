import camelize from "./camelize";

const camelizeObject = (obj) => {
  let newObject = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      let camelCasedKey = camelize(key);
      if (typeof obj[key] === `object` && !Array.isArray(obj[key])) {
        let camelCasedObj = camelizeObject(obj[key]);
        newObject[camelCasedKey] = camelCasedObj;
      } else {
        newObject[camelCasedKey] = obj[key];
      }
    }
  }
  return newObject;
};

export default camelizeObject;
