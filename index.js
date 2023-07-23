// Aim : To create a function that can automatically trigger the scroll action in a Instagram Web

// Function to click the element with class "_abm0"
// "_abm0" is the class that holds the button that triggers the next reel to pop up on the feed/screen
function clickElementWithClass() {
  const targetElement = document.querySelector('._abm0'); // Finds the first element with the class '_abm0' in the document
  if (targetElement) {
    targetElement.click(); // If the element is found, click action is simulated
  }
}

// Function to click the element every 30 seconds
function clickElementEvery30Seconds() {
    // Set up a recurring timer to trigger the clickElementWithClass() function every 30 seconds
  setInterval(clickElementWithClass, 30000); // 30 seconds in milliseconds
}

// Start clicking the element
clickElementEvery30Seconds();

// Output ::
/*  
    The code looks fine and working but there seems to be an issue becuase the "_abm0" class name is 
    same for "Go Back" and "Next" action in the reel
*/