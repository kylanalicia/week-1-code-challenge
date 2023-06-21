// Create a variable to hold the license information
let licenseinformation;

// Define a function called checkdriverslicense that takes in a speed parameter
function checkdriverslicense(speed) {

  // Check if the speed is less than 70
  if (speed < 70) {
    // If it is, assign "ok" to the licenseinformation variable
    licenseinformation = "ok";
  }

  // Calculate the demerit points based on how much over the speed limit the driver was going
  let demeritpoint = Math.floor((speed - 70)/5);

  // Check if the driver has less than 12 demerit points
  if (demeritpoint < 12) {
    // If they do, assign the number of demerit points to the licenseinformation variable
    licenseinformation = demeritpoint;
  } else {
    // If they have 12 or more demerit points, assign "LICENSE SUSPENDED!" to the licenseinformation variable
    licenseinformation = demeritpoint + ' LICENSE SUSPENDED!';
  }

  // Display the license information or "wrong-input" if the input was invalid 
  if (licenseinformation !== undefined) {
    display(licenseinformation);
  } else {
    display('wrong-input');
  }
}

