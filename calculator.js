function add(a,b){
	return (a + b);
}

function subtract(a,b){
	return (a - b);
}

function multiply(a,b){
	return (a * b);
}

function divide(a,b){
	return (a / b);
}

function operator(op, a, b){
	if(op === add){
		return add(a,b)
	}	else if(op === subtract){
		return subtract(a,b)
	}	else if(op === multiply){
		return multiply(a,b)
	}	else if(op === divide){
		return divide(a,b)
	}
}

let runningDisplay = document.getElementById("display");

/*
let testButton = document.getElementById("1");
testButton.addEventListener("click", (event) => {
	display.textContent += "1";
});


function updateDisplay(){
	item.addEventListener("Click", (event) => {
		display.textContent += "1";
	})
};


*/

let numberInputs = document.getElementsByClassName("numInput");


for(let i = 0; i < numberInputs.length; i++){
	numberInputs[i].addEventListener("click", (event) => {
		display.textContent += event.target.value;
	});
}


