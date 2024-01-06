console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count < 0) count = count * -1; // BONUS: Accounts for negative count
    for (let i = 0; i <= count; i++) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  }
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(age) {
    const aboveSixteen = "You can drive!";
    const belowSixteen = "Sorry, but you need to wait until you're 16.";
    if (age >= 16) {
      console.log(aboveSixteen);
    } else {
      console.log(belowSixteen);
    }
  }

  console.log("EXERCISE 3:\n==========\n");
  function determineQuadrant(x, y) {
    if (x === 0 && y === 0) {
      console.log("The point is at the origin.");
    } else if (x === 0) {
      console.log(`(${x}, ${y}) is on the y axis.`);
    } else if (y === 0) {
      console.log(`(${x}, ${y}) is on the x axis.`);
    } else if (x > 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
      console.log(`(${x}, ${y}) is in Quadrant 3.`);
    } else if (x > 0 && y < 0) {
      console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
  }
  console.log("EXERCISE 4:\n==========\n");
  function triangleType(side1, side2, side3) {
    // Check if the sides form a valid triangle
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
      // Check the type of triangle
      if (side1 === side2 && side2 === side3) {
        return "Equilateral triangle: All side lengths are equal.";
      } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles triangle: Two side lengths are equal.";
      } else {
        return "Scalene triangle: All side lengths are different.";
      }
    } else {
      return "Invalid triangle: The sides do not form a valid triangle.";
    }
  }
  