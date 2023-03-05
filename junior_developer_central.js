// Part 1
// Exercise 1:

// Write a Javascript program to check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100

// function check100(num1, num2) {
//     if (num1 === 100 || num1 + num2 === 100) {
//         // Use conditional to check numbers
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(check100(50, 1));
// console.log(check100('100', 1));
// console.log(check100('50', '50'));
// console.log(check100(50, 50));
// console.log(check100(100, 100));
// console.log(check100(99, 1));

// Other solution

// const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;

// console.log(isEqualTo100(50, 1));
// console.log(isEqualTo100('100', 1));
// console.log(isEqualTo100('50', '50'));
// console.log(isEqualTo100(50, 50));
// console.log(isEqualTo100(100, 100));
// console.log(isEqualTo100(99, 1));

// Exercise 2:

// Write a Javascript program to get extension of a filename.

// function getFileExtension(filename) {
//     return filename.split('.').pop(); // Use .split to cut the string from the dot and .pop to take the extension alone
// }
// console.log(getFileExtension('start.exe'));
// console.log(getFileExtension('Readme.md'));
// console.log(getFileExtension('script.js'));
// console.log(getFileExtension('webpack.config.js'));

// Other solution

// const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

// console.log(getFileExtension('start.exe'));
// console.log(getFileExtension('Readme.md'));
// console.log(getFileExtension('script.js'));
// console.log(getFileExtension('webpack.config.js'));

// Exercise 3:

// Write a Javascript program to replace every character in a given string with a character following it in the alphabet

// function letterChange(str) {
//     return str.replace(/[a-zA-Z]/g, function (x) {
//         return String.fromCharCode(x.charCodeAt(0) + 1);
//     });
// }
// console.log(letterChange('abc'));
// console.log(letterChange('bcd'));
// console.log(letterChange('cde'));

//Another solution

// const moveCharsForward = (str) =>
//     str
//         .split('')
//         .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
//         .join('');

// console.log(moveCharsForward('abc'));
// console.log(moveCharsForward('def'));

// Exercise 4:

// Write a Javascript program to get the current date. Expected Output.
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy

// let currentDate = function () {
//     today = new Date();
//     let mm = today.getMonth() + 1; // January as 0
//     let dd = today.getDate();
//     let yyyy = today.getFullYear();

//     if (dd < 10) dd = '0' + dd; // Dealing with the format requested by adding a 0
//     if (mm < 10) mm = '0' + mm; // Dealing with the format requested by adding a 0
//     return mm + '/' + dd + '/' + yyyy;
// };
// console.log(currentDate());

// Another solution

// const formatDate = (date = new Date()) => {
//     const months = date.getMonth() + 1;
//     const days = date.getDate();
//     const years = date.getFullYear();
//     return `${months}/${days}/${years}`;
// };
// console.log(formatDate());

// Exercise 5:

// Write a Javascript program to create a new string adding "New!" in front of the given string. If the given string begins with "New!" already then return the original string.

// function newStrFront(strInput) {
//     const prependString = 'New! ';
//     if (strInput.includes('New!')) {
//         return strInput;
//     }

//     return prependString + strInput;
// }
// console.log(newStrFront('Some string'));
// console.log(newStrFront('New! Fake string'));

// Another solution

// const addNew = (str) => (str.indexOf('New!') === 0 ? str : `New! ${str}`);

// console.log(addNew('Offers'));
// console.log(addNew('New! Offers'));

// Part 2
// Exercise 1:

// Write a Javascript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the original string is returned.

// const makeNewString = (str) =>
//     str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

// console.log(makeNewString('abc'));
// console.log(makeNewString('abcdef'));
// console.log(makeNewString('abc123abc123'));
// console.log(makeNewString('ab'));

// Exercise 2:

// Write a Javascript program to extract the first half of a string of even length.

// const firstHalf = (str) => str.slice(0, str.length / 2);

// console.log(firstHalf('temp'));
// console.log(firstHalf('temple'));
// console.log(firstHalf('temples'));

// Exercise 3:

// Write a Javascript program to concatenate two strings except their first character.

// const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1);

// console.log(concatenate('abc', 'def'));
// console.log(concatenate('Junior', 'Developer'));

// Exercise 4:

// Given two CSSFontPaletteValuesRule, write a Javascript program to find out which one is nearest to 100.

// const closestTo100 = (a, b) =>
// (100 - a < 100 - b ? a : b);

// console.log(closestTo100(99, 1));
// console.log(closestTo100(49, 51));
// console.log(closestTo100(50, 50));

// Exercise 5:

// Write a Javascript program to check a given string contains 2 to 4 ocurrences of a specific character.

// const countChars = (str, char) =>
//     str.split('').filter((ch) => ch === char).length;

// const contains2To4 = (str, char) =>
//     countChars(str, char) >= 2 && countChars(str, char) <= 4;

// console.log(contains2To4('ooh!', 'o'));
// console.log(contains2To4('oh!', 'o'));
// console.log(contains2To4('oooh!', 'o'));
// console.log(contains2To4('ooooh!', 'o'));
// console.log(contains2To4('oooooh!', 'o'));

// Part 3
// Exercises 1:

// Write a Javascript program to find the number of even digits in an array of integers.

// const countEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0).length;

// console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));
// console.log(countEvenNumbers([2, 2, 2, 2, 2, 2]));
// console.log(countEvenNumbers([3, 5, 7, 9, 10, 100]));

// Exercise 2:

// Write a Javascript program to find the number of even values up to a given number.

// const countEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0).length;

// const createArrayOfNumbers = (num) => {
//     const returnArray = [];
//     for (let i = 1; i <= num; i += 1) {
//         returnArray.push(i);
//     }
//     return returnArray;
// };

// console.log(countEvenNumbers(createArrayOfNumbers(6)));
// console.log(countEvenNumbers(createArrayOfNumbers(9)));

// Exercise 3:

// Write a Javascript program to check whether a given array of integers is sorted in ascending order.

// const isAscending = (arr) => {
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i + 1] < arr[i]) return false;
//     }
//     return true;
// };

// console.log(isAscending([1, 2, 3, 5, 6]));
// console.log(isAscending([1, 2, 5, 4, 3, 6]));
// console.log(isAscending([1, 2, 3, 4, 5, 6, 6]));

// Exercise 4:

// Write a Javascript program to get the largest even number from an array of integers.

// const largestEven = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));

// console.log(largestEven([1, 2, 3, 4, 5, 6]));
// console.log(largestEven([1, 2, 33, 4, 5, 6]));
// console.log(largestEven([1, 2, 3, 44, 55, 6]));

// Exercises can be found in this youtube video
// Part 1: https://www.youtube.com/watch?v=N65RvNkZFGE&ab_channel=JuniorDeveloperCentral
// Part 2: https://www.youtube.com/watch?v=U0Ce27lA7R4&ab_channel=JuniorDeveloperCentral
