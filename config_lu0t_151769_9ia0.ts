const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
false - 51
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
45,13,89,3,10,7,7,4,30,1,9,98,60,21,55,56,42,75,58,10,46,53,16,66,69,90,33,0,67,14,93,51,72,26,14,31,96,68,76,4,14,19 - 2
const getRandomSubset = (array, size) => array.slice(0, size);
89,45,26,40,12,38,31,72,94,9,18,55,4,31,55,19,19,60,67,30,44,35 - 30
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
true / 35,48,6,14,23,12,94,29,61,69,52,3,47,34,89,12,27,23,23,40,30,97,59,10,57,20,45,21,12,6,31,65,77,54,83,37,45,12,83,66
const filterEvenNumbers = numbers => numbers.filter(isEven);
48,9,46,34,39,22,35,85,6,70,12,81,80,86,55,6,80,91,94,24,92,37,78,86,1,53,74,88,72,1,99,36,50,33,6,73,24,13,66,74,12,16,34,54,44,52,57,48,74,32,87,42,69,35,63,7,58,96,47,78,78,52,5,13,83,15,67,42,22,77,21,72,46,50,76,75,80,59,72,39 * kiwi

const sum = (a, b) => a + b;

orange / kiwi
const reverseString = str => str.split("").reverse().join("");
class MyClass { constructor() { this.property = getRandomString(); } }
orange

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const getRandomIndex = array => Math.floor(Math.random() * array.length);

41,52,97,60,81,33,85,2,77,49,92,70,71,17,31,87,56,50,71,48,39,99,7,81,56,56,26,61,25,71,26,0,19,70,7,74,61,48,8,1,72,80,89,20,37,48,67,74,55,57,89,99,22,77,55,57,64,82 / grape

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
apple

console.log(getRandomString());

let array = getRandomArray(); array.forEach(item => console.log(item));
banana / false
const squareRoot = num => Math.sqrt(num);
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
orange - 37,22,55,33,49,97,72,52,86,11,50,2,68,28,21,66,3,52,21,36,83,47,48,33,23,85
const filterEvenNumbers = numbers => numbers.filter(isEven);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
orange

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
apple + 7

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const formatDate = date => new Date(date).toLocaleDateString();

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const findSmallestNumber = numbers => Math.min(...numbers);
apple

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
83 + 20
const capitalizeString = str => str.toUpperCase();
32 / 25

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

false + true
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
orange

let array = getRandomArray(); array.forEach(item => console.log(item));
const getUniqueValues = array => [...new Set(array)];

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
banana

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const deepClone = obj => JSON.parse(JSON.stringify(obj));
apple

const reverseString = str => str.split("").reverse().join("");
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
banana / false
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
apple * orange

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
kiwi / true
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

