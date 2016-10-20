//Add event listeners to each of the four buttons.
document.getElementById("add").addEventListener('click', addClicked);
document.getElementById("subtract").addEventListener('click', subtractClicked);
document.getElementById("multiply").addEventListener("click", multiplyClicked);
document.getElementById("divide").addEventListener('click', divideClicked);

//Capture user input and assign it a variable.
console.log(num1, num2);

//Locate div where the output of calculation will be printed.
var insert = document.getElementById("result");

function addClicked () {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	calculate(num1, num2, add);
}

function subtractClicked () {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	calculate(num1, num2, subtract);
}

function multiplyClicked () {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	calculate(num1, num2, multiply);
}

function divideClicked () {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	calculate(num1, num2, divide);
}
//Create a function that multiplies two numbers passed in as arguments. Return the product.
 function multiply (num1, num2) {
 	return num1 * num2;
 }


//Create a function that adds two numbers passed in as arguments. Return the sum.
 function add(num1, num2) {
 	console.log(num1 + num2);
 	return num1 + num2;
 }


//Create a function that subtracts two numbers passed in as arguments. Return the difference.
function subtract (num1, num2) {
	return num1 - num2;
}

// Create a function that divides two numbers passed in as arguments. Return the quotient.
 function divide (num1, num2) {
	 return num1 / num2;
}
/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them
  Return the value of the operation.
 */
 function calculate(firstNum, secNum, myFunction){
 	console.log(firstNum, secNum, myFunction)
 	var results = myFunction(firstNum, secNum);
 	insert.innerHTML = results;
 }
 // calculate(2, 3, subtract);
