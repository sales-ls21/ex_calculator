#Create a simplistic calculator
##Instructions
1. Create a simple HTML document that meets the following requirements:
    -two input areas that will accept numbers
    -four buttons that, when clicked will perform the four basic mathematical operations (add, subtract, multiply, divide). 
    -an open element where the result of the operations will be output.
2. Create an Javascript document with the following requirements:
    -each button should have an event listener that triggers the appropriate operation
    -create functions that will perform the appropriate math operation 
    -create one function that will accept three parameters (a number, another number, and a function)
3. Make all of that work together to simulate a simply calculator. 

####Author Comments
The setup on this one is actually fairly easy. The problems came when I was trying to get the final function to determine which of the buttons was 
clicked such that the appropriate calculation would happen. In the end, the path of least resistence and the far less elegant solution won out. 
I created four new functions that were passed to the event listeners and, from those, passed the appropriate information to the final calculator 
function that would output the answer to the HTML element. 

I'm sure there are simpler, more elegant ways of getting at the same solution and I'll revisit when I've discovered them.
