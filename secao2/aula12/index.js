let str = "Hello World!"

console.log(str);
console.log(`First character: ${str[0]}`);//return the character at the position 0
console.log(`Second character: ${str[1]}`);//return the character at the position 1
console.log(`Third character: ${str.charAt(2)}`);//return ther third charachter
console.log(`Last character: ${str[str.length-1]}`);//return the charcter at the last position
console.log(`Index of "Wor": ${str.indexOf(`Wor`)}`);//return the postion that "Wor" starts
console.log(`Index of "wor": ${str.indexOf(`wor`)}`);//return a number that means false
console.log(`Index of "o" after index 5: ${str.indexOf(`o`, 5)}`);//return the first position of a seached character after another position
console.log(`Index of "o" before index 6: ${str.lastIndexOf(`o`, 6)}`);//return the first position of a seached character before another position
console.log(`All minimized character: ${str.match(/[a-z]/g)}`);//return characters that matches de regular expression
console.log(`Replace "World" for "People": ${str.replace("World", "People")}`);//return the string with characters replaced
console.log(`Sliced str after postion 6: ${str.slice(6)}`);//return the string sliced after a position
console.log(`Sliced str after postion 6 and before postion 10: ${str.slice(6,10)}`);//return the string sliced between two position
console.log(str.toUpperCase());//all the string maximized








