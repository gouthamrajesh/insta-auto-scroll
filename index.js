// Aim : To create a function that can automatically trigger the scroll action in a Instagram Web

// Function to click the button with class name "_abl-" inside the element with class "_aaqg _aaqh"
function clickButtonWithClassName() 
{
    // Find the container element with the classes "_aaqg _aaqh"
    const container = document.querySelector('._aaqg._aaqh');
    // Check if the container element exists
    if (container) 
    {
        // Find all the buttons with class name "_abl-" inside the container
        const buttons = container.querySelectorAll('button._abl-');
        // Check if any buttons with class name "_abl-" are found inside the container
        if (buttons.length > 0) 
        {
            // Click the first button with class name "_abl-" inside the container
            buttons[0].click();
        } 
        else 
        {
            // Log a message if no buttons with class name "_abl-" are found inside the container
            console.log("Button with class name '_abl-' not found inside the container.");
        }
    } 
    else 
    {
        // Log a message if the container element is not found
        console.log("Container with class name '_aaqg _aaqh' not found.");
    }
}
  
// Function to click the button every 30 seconds
function clickButtonEvery30Seconds() 
{
    // Set up a recurring timer to trigger the clickButtonWithClassName() function every 30 seconds
    setInterval(clickButtonWithClassName, 30000); // 30 seconds in milliseconds
}
  
// Start clicking the button by calling the clickButtonEvery30Seconds() function
clickButtonEvery30Seconds();

// Explanation ::
/*
    In instagram, while watching the saved feed in website there are two icons that helps us to navigate to the right side and
    left side of the page which significantly takes us to the next reel that we've saved. Each of these icons are svg files according
    to the front end of the instagram which is embedded inside a class "_abm0" which is embedded inside a button class "_abl-". But
    the challenging part is that this same button works as "Go Back" and "Next" button. But..., there is another class "_aaqf _aaqh"
    that handles the "Go Back" button and needful actions and " _aaqg _aaqh" which controls the "Next" button.

    Inorder to play our Next reels in the saved portion all we have to do is to trigger that particular button class to be clicked
    under that respective parent class. All these actions need to be performed under a certain set of time, namely I've used 30 seconds
    in my simualtion.
*/