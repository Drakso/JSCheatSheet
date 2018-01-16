//initializing an empty array
let emptyArray = [];

//initializing array with items

let fullArray = ["number", 5, "wow"];

//Lenghth
let shortArray = [1, 2, 3, 5];
console.log(shortArray.length); // 4 ( how many elements are in the array)

//get an element from array
let item = fullArray[2];
console.log(`item: ${item}`); //item: "wow"

//change an element from array
fullArray[1] = "changed";
console.log(fullArray); // ["number", "changed", "wow"]

//add value to a non-existant place in the array
let newArray = ["hello", 3];
newArray[4] = "new";
console.log(newArray); // ["hello", 3, undefined, undefined, "new"]

// adding and removing items at the end of an array
let someArray = ["human", "dog", "cat"];
someArray.push("dinosaur"); // adds "dinosaur" at the end of the array
console.log(someArray); // ["human", "dog", "cat", "dinosaur"]
someArray.push("aligator", "elephant"); // can add multiple items
console.log(someArray); // ["human", "dog", "cat", "dinosaur", "aligator", "elephant"]
someArray.pop(); // removes the last item from the array
console.log(someArray); // ["human", "dog", "cat", "dinosaur", "aligator"]
let theLastItem = someArray.pop();
console.log(someArray); // ["human", "dog", "cat", "dinosaur"]
console.log(`theLastItem: ${theLastItem}`); // theLastItem: aligator

// adding and removing items at the start of an array
let someArray = ["human", "dog", "cat"];
someArray.unshift("dinosaur"); // adds "dinosaur" to the front of the array
console.log(someArray); // ["dinosaur", "human", "dog", "cat"]
someArray.unshift("aligator", "elephant"); // can add multiple items
console.log(someArray); // ["aligator", "elephant", "dinosaur", "human", "dog", "cat"]
someArray.shift(); // removes the first item from the array
console.log(someArray); // ["aligator", "elephant", "dinosaur", "human", "dog"]
let theLastItem = someArray.pop();
console.log(someArray); // ["aligator", "elephant", "dinosaur", "human"]
console.log(`theLastItem: ${theLastItem}`); // theLastItem: dog

// Filtering and running functions on array and array items
let myArray = [2, 3, 4, 5, 6, 7, 100, 120, 133, 135, 5, "car", "bike", "tank", "plane"];
// Check all elements with a function and return true/false. If ALL elements pass the test function return true, otherwise false
let everyResult = myArray.every(x => x > 100);
console.log(everyResult); // false ( all elements are not larger than 100 )

// Check all elements and return a new array with the ones that passed the test function
let filterResult = myArray.filter(x => x < 10);
console.log(filterResult); // [2, 3, 4, 5, 6, 7, 5] ( all elements that are less than 10 are here )
// Return the first element that passes a test function
let findResult = myArray.find(x => x.length > 3);
console.log(findResult); // bike (returns the first that is longer thatn 3. Numbers are skiped since they don't have the length property)

// Run a function on every element in the array ( Does not result in a new array )
let foreachResult = myArray.forEach( x => console.log(`Item: ${x}`)); // It will show every element in console with "Item:" in front of it
// Run a function on every element and create a new array with the results
let mapResult = myArray.map(x => x + 1);
console.log(mapResult); // [3, 4, 5, 6, 7, 8, 101, 121, 134, 136, 6, "car1", "bike1", "tank1", "plane1"]

// Return the index of the first element that passes a test function ( returns -1 if the item is not found )
let findIndexResult = myArray.findIndex(x => x > 6);
console.log(findIndexResult); // 5 (the index is 5, starting from 0)
// Return the index of the element equal to the argument, starting from a given position or from the beginning of the array if no value is given ( returns -1 if the item is not found )
let indexOfResult = myArray.indexOf("tank");
console.log(indexOfResult); // 13 (the index is 13, starting from 0)
indexOfResult = myArray.indexOf("car", 13);
console.log(indexOfResult); // -1 (was not found since it started from 13th position counting from the front)

// Joins the elements of an array in to one string with a separator set as an argument of the function. If there is no argument, the default separator is ,
let joinResult = myArray.join();
console.log(joinResult); // 2,3,4,5,6,7,100,120,133,135,5,car,bike,tank,plane
joinResult = myArray.join("--");
console.log(joinResult); // 2--3--4--5--6--7--100--120--133--135--5--car--bike--tank--plane
// Reverses an array
let reverseResult = myArray.reverse();
console.log(reverseResult); // ["plane", "tank", "bike", "car", 5, 135, 133, 120, 100, 7, 6, 5, 4, 3, 2]

// Selections
let dogs = ["Spike", "Chuck", "Benny", "Buck", "Snoopy", "Max"];
// Returns new array with selected elements
let sliceResult = dogs.slice(2,4); // Takes all elements from position 2 to position 4 without the 2nd and 4th position ( counting from 0 )
console.log(sliceResult); // ["Benny", "Buck"]
// Removes items from a certain position in the current array and/or adds new items from that position. (First deletes then adds new) Changes the current array and returns any removed items
let spliceResult = dog.splice(2, 1, "Garry", "Rex"); // from position 2 (including the element on position 2) delete 1 item from that position and then add "Garry" and "Rex" starting from the same position
console.log(spliceResult); // ["Benny"]
console.log(dogs); // ["Spike", "Chuck", "Garry", "Rex", "Buck", "Snoopy", "Max"]