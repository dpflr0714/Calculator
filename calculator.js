function add(a,b){
	let result = parseInt(a) + parseInt(b);
	return result;
}

function subtract(a,b){
	let result = parseInt(a) - parseInt(b);
	return result;
}

function multiply(a,b){
	let result = parseInt(a) * parseInt(b);
	return result;
}

function divide(a,b){
	let result = parseInt(a) / parseInt(b);
	return result;
}



function operator(op, a, b){
	if(op === "add"){
		return add(a,b)
	}	else if(op === "subtract"){
		return subtract(a,b)
	}	else if(op === "multiply"){
		return multiply(a,b)
	}	else if(op === "divide"){
		return divide(a,b)
	}

}

function equal(){


}

let runningDisplay = document.getElementById("display");

let numberInputs = document.getElementsByClassName("numInput");
let opInputs = document.getElementsByClassName("opInput");
let equalInput = document.getElementById("equal");

for(let i = 0; i < numberInputs.length; i++){
	numberInputs[i].addEventListener("click", (event) => {
		if(clearDisplay === false){
			display.textContent = "";
			display.textContent += event.target.value;
			clearDisplay = true;
		} else if(clearDisplay === true){
			display.textContent += event.target.value;
		}
	});
}

let currentNumber;
let operators;
let clearDisplay = true;

for(let i = 0; i < opInputs.length; i++){
	opInputs[i].addEventListener("click", (event) => {
		//clear the display and store the number and the op
		operators = event.target.value
		currentNumber = display.textContent;
		display.textContent = ""
/*
		if(){

		} else if(){

		}
*/		
	});
}

equalInput.addEventListener("click", (event) => {
	let lastNumber = display.textContent;

	display.textContent = operator(operators, currentNumber, lastNumber);
	clearDisplay = false;
});
