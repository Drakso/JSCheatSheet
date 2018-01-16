// while loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let someArray = ["Bob", "Sam", "Nigel", "Joey", "Patt", "Chris"];
i = 0;
console.log("These are the people that have 4 letters names:");
while (someArray.length > i) {
    if (someArray[i].length == 4) {
        console.log(someArray[i]);
    }
    i++;
}

// For loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let numbersArray = [3, 7, 24, 44, 65, 33, 11, 90, 944, 234];
console.log("These are the numbers that can be devided by 3 cleanly:");
for (let i = 0; numbersArray.length > i; i++) {
    if (numbersArray[i] % 3 == 0) {
        console.log(numbersArray[i]); // logs 3 24 33 90 234 in the console
    }
}

// Break
let numbersArray = [3, 7, 24, 44, 65, 33, 11, 90, 944, 234];
for (let i = 0; numbersArray.length > i; i++) {
    if (numbersArray[i] === 90) {
        console.log(`We caught the number ${numbersArray[i]}`);
        break; // At the 8th cycle this will be executed and the loop will stop. The console.log bellow will not execute.
    }
    console.log(`This ${numbersArray[i]} is not the number we are looking for!`);
}

// Continue
let numbersArray = [3, 7, 24, 44, 65, 33, 11, 90, 944, 234];
for (let i = 0; numbersArray.length > i; i++) {
    if (numbersArray[i] === 24) {
        continue; // At the 2nd cycle this will be executed and all code after the continue will be skipped, but the loop will not stop. The console.log bellow will not execute.
    }
    console.log(`This ${numbersArray[i]} is a cool number!`);
}