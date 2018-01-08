// Simple If Statement
if (true) {
  console.log("The statemment was true. If it were false you would not see this message!");
}

// Simple If Else Statement
if (false) {
  console.log("Because the statement is false, this will not show in the console");
} else {
  console.log("If all conditions are false(like right now), this will be shown");
}

// If statement with an operation
if (5 + 2 > 3) {
  console.log("5 + 2 is apparently > 3 and this will be shown in the console");
} else {
  console.log("Sicne the statement above is true, this will not be shown in the console");
}

// If else If statement
x = 12;
if (x < 10) {
  console.log("since x(12) < 10 statement is not true, this will not show in the console");
} else if (x == "Wow") {
  console.log("x == Wow is also not true");
} else if (x > 10) {
  console.log("the statement x > 10 is true, and this will be shown in the console");
} else if (x == 12) {
  console.log("this will not execute even if it's true")
} else {
  console.log("this will not execute as well because some of the above statements was true");
}

// if in another if 
if (true) {
  console.log("This will be executed first");
  if (2 + 2 == 4) {
    console.log("This will execute second");
  } else {
    console.log("The statement above is true and this will not execute");
  }
  console.log("This will be executed last");
}

// Function inside if statement
if (() => {
    return true;
  }) {
  console.log("This will be shown in the console because the function in the statement returns true");
} else {
  console.log("This will not show since the above statement was true");
}