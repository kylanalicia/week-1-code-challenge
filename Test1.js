function grades() {
  // Get the input value from element with id "marks".
  let number = document.getElementById("marks").value;

  // Parse the input value to an integer.
  let marks = parseInt(number);
  
  // Declare a variable to hold the grade.
  let grade; 
  
  // Check the marking scheme, assign grade based on marks range.
  if (marks >= 79) {
      grade = "A";
  } else if (marks >= 60) {
      grade = "B";
  } else if (marks >= 49) {
      grade = "C";
  } else if (marks >= 40) {
      grade = "D";
  } else {
      grade = "E";
  }
  
  // Get the element with id "result".
  const gradedisplay = document.getElementById("result");

  graded.textContent = "grading;" +text;
}
  
  // Display the grade on the web page. 
  gradedisplay.textContent = "grading: " + grade;
}

// Call the grades() function.
grades("marks");