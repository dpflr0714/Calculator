function add(a,b){
	let result = parseFloat(a) + parseFloat(b);
	return result;
}

function subtract(a,b){
	let result = parseFloat(a) - parseFloat(b);
	return result;
}

function multiply(a,b){
	let result = parseFloat(a) * parseFloat(b);
	return result;
}

function divide(a,b){
	if(b == 0){
		return "Yoo.. you can't divide by 0"
	} else {
	let result = parseFloat(a) / parseFloat(b);
	return result;
	}
}

function operator(op, a, b){
	if(op === "+"){
		return add(a,b)
	}	else if(op === "-"){
		return subtract(a,b)
	}	else if(op === "*"){
		return multiply(a,b)
	}	else if(op === "/"){
		return divide(a,b)
	}
}

window.addEventListener("keydown", keyboardEvent)

let allowedNumbers = ["0","1","2","3","4","5","6","7","8","9"];
let allowedOperators = ["/","*","-","+"];

function keyboardEvent(){
	let key = event.key;
	if(allowedNumbers.includes(key)){
		if(clearDisplay === false){
			display.textContent = "";
			display.textContent += key;
			clearDisplay = true;
		} else if(clearDisplay === true){
			display.textContent += key;
		}
		
	} else if(allowedOperators.includes(key)){
		if(operators == undefined){
			currentNumber = display.textContent;
			operators = key;
			if(currentNumber == ""){
				message.textContent = "Please enter a number first"
				operators = undefined;
			}
		} else {
			lastNumber = display.textContent;
			display.textContent = operator(operators, currentNumber, lastNumber);
			currentNumber = display.textContent;
			operators = key;
		}

		clearDisplay = false;
	} else if(key == "Enter"){
		if(operators == undefined){
			null;
		} else {
			let lastNumber = display.textContent;
			display.textContent = operator(operators, currentNumber, lastNumber);
			operators = undefined;
			lastNumber = undefined;
			currentNumber = undefined;
		}
		clearDisplay = false;
	} else if(key == "Backspace" || key == "Delete"){
		let oldNumber = display.textContent;
		let newNumber = oldNumber.substring(0, oldNumber.length - 1);
		display.textContent = newNumber;
		console.log("HI")
	} else if(key == "."){
		searchString = display.textContent;

		if(searchString.includes(".") ==  false){
			display.textContent += key;
		} else {
			null;
		}
	} else {
		null;
	}

}

let runningDisplay = document.getElementById("display");

let numberInputs = document.getElementsByClassName("numInput");
let opInputs = document.getElementsByClassName("opInput");
let equalInput = document.getElementById("equal");
let allClearInput = document.getElementById("allClear");
let backSpaceInput = document.getElementById("Backspace");
let decimalInput = document.getElementById("decimal");

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
let lastNumber;

for(let i = 0; i < opInputs.length; i++){
	opInputs[i].addEventListener("click", (event) => {
		//for the very first input of number and operator
		if(operators == undefined){
			currentNumber = display.textContent;
			operators = event.target.value;
			if(currentNumber == ""){
				message.textContent = "Please enter a number first"
				operators = undefined;
			}
		} else {
			lastNumber = display.textContent;
			display.textContent = operator(operators, currentNumber, lastNumber);
			currentNumber = display.textContent;
			operators = event.target.value;
		}

		clearDisplay = false;
	});
}

equalInput.addEventListener("click", (event) => {

	if(operators == undefined){
		null;
	}
	else {
	let lastNumber = display.textContent;
	display.textContent = operator(operators, currentNumber, lastNumber);
	operators = undefined;
	lastNumber = undefined;
	currentNumber = undefined;
	}

	clearDisplay = false;
});

allClearInput.addEventListener("click", (event) => {

	display.textContent = "";
	operators = undefined;
	lastNumber = undefined;
	currentNumber = undefined;
});

backSpaceInput.addEventListener("click", (event) => {

	let oldNumber = display.textContent;
	let newNumber = oldNumber.substring(0, oldNumber.length - 1);
	display.textContent = newNumber;
});

decimalInput.addEventListener("click", (event) => {

	searchString = display.textContent;

	if(searchString.includes(".") ==  false){
		display.textContent += event.target.value;
	} else {
		null;
	}
});

