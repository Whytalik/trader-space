function convertToKey(str) {
  return str
    .split(/[\s/()-]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

export function jsonToConstants(jsonArray) {
  const constants = {};
  jsonArray.forEach((item) => {
    const key = convertToKey(item);
    constants[key] = item;
  });
  return constants;
}
