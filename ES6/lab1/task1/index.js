// ---- task1 ----
let value1 = 100;
let value2 = 500;
[value1, value2] = [value2, value1];

console.log(`value1 after swap = ${value1}`);
console.log(`value2 after swap = ${value2}`);

// ******************************

// ---- task2 ----
let mn = (...numbers) => {
    return Math.min(...numbers);
}

let mx = (...numbers) => {
    return Math.max(...numbers);
}

let arr = [-1, 1, 5, 3, 4, 100, -2];

console.log("Min value:", mn(...arr));
console.log("Max value:", mx(...arr));


// ******************************

// ---- task3 ----
let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// a - every
let areStrings = fruits.every(fruit => typeof fruit === "string");
console.log("Are all elements strings?", areStrings);

// b - some
let someStartWithA = fruits.some(fruit => fruit.startsWith("a"));
console.log("Are some elements start with 'a'?", someStartWithA);

// c - filter
let filteredFruits = fruits.filter(fruit => fruit.startsWith("b") || fruit.startsWith("s"));
console.log("Filtered fruits (start with 'b' or 's'):", filteredFruits);

// d - map
let likedFruits = fruits.map(fruit => fruit);
console.log("Liked Fruits Array:"); 
for (let i = 0; i < likedFruits.length; i++) {
    console.log(likedFruits[i]);
}

// e - forEach
likedFruits.forEach(msg => console.log(msg));


// ******************************

// ---- task4 ----
function getPositiveNums(nums) {
    return nums.filter(function(num) {
        return num > 0;
    });
}
let nums = [100, -50, -2, 5, 10, 0, 8, -9, 3];
console.log("Positive Numbers:", getPositiveNums(nums));


// ******************************

// ---- task5 ----
function sum(nums) {
    return nums.reduce(function(sum, num) {
        return sum + num;
    }, 0);
}
console.log("Sum of Numbers:", sum(nums));


// ******************************

// ---- task6 ----
function capitalizedNames(names) {
    return names.map(function(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    });
}
let names = ["roaa", "emAn", "SaMeh", "RowIdA"];
console.log("Capitalized Names:", capitalizedNames(names));


// ******************************

// ---- task7 ----
function isLowerCase(str) {
    return str === str.toLowerCase();
}
console.log(isLowerCase("roaa"));
console.log(isLowerCase("Roaa"));
console.log(isLowerCase("RoAa"));


// ******************************

// task ---- task8 ----
let filterByLength = (arr, minLength) => arr.filter(str => str.length > minLength);
let words = ["roaa", "apple", "hi", "home", "cat", "hello", "iti", "angular"];
console.log(filterByLength(words, 4));
