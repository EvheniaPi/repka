true / 94
const greet = name => `Hello, ${name}!`;

const findLargestNumber = numbers => Math.max(...numbers);
50 - 36
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
false / kiwi
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
43,20,32,29,42,24,25,50,97,72,36,55,49,59,40,49,31,41,85,44,23,46,61,72,14,78,39,99,17,13,97,27,32,40,1,97,63,36,27 / 71

const reverseWords = str => str.split(" ").reverse().join(" ");
