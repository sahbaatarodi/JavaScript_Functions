console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
  for (let i = 1; i <= count; i++) {
    // Check if the current value is odd
    if (i % 2 !== 0) {
      // Print the odd value to the console
      console.log(i);
    }
  }
  }
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
  // Declare and initialize local variables
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  // Check if the age is below 16 using an if/else statement
  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}

  console.log("EXERCISE 3:\n==========\n");
  function whichQuadrant(x, y) {
    // Check if the point is on the x or y axis
    if (x === 0 && y !== 0) {
      console.log(`(${x}, ${y}) is on the y axis`);
    } else if (y === 0 && x !== 0) {
      console.log(`(${x}, ${y}) is on the x axis`);
    } else if (x > 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 1`);
    } else if (x < 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 2`);
    } else if (x < 0 && y < 0) {
      console.log(`(${x}, ${y}) is in Quadrant 3`);
    } else if (x > 0 && y < 0) {
      console.log(`(${x}, ${y}) is in Quadrant 4`);
    } else if (x === 0 && y === 0) {
      console.log(`(${x}, ${y}) is at the origin`);
    }
  }
  
  console.log("EXERCISE 4:\n==========\n");
  function triangleType(side1, side2, side3) {
    // Check for a valid triangle
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
      // Check the type of triangle
      if (side1 === side2 && side2 === side3) {
        return "Equilateral triangle: all side lengths are equal";
      } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles triangle: only two side lengths are equal";
      } else {
        return "Scalene triangle: all side lengths are different";
      }
    } else {
      return "Invalid triangle: The sum of two sides should be greater than the length of the third side";
    }
  }
  
    