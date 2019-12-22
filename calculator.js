//Simple Calculater - Jeremy Todd 12/2019

let lastNumber = 0
let lastOperation
let lastInputType
let history = []
let storedNumber = 0


//Process numbers
function numberInput(numberValue) {
	if (lastNumber === 0 || lastInputType === "operation") {	//convert to strings to combine digits
		lastNumber = numberValue;
	} else {
		String(lastNumber);
		lastNumber = lastNumber += numberValue;
	}
	document.getElementById('current-entry').innerHTML = lastNumber;
	lastInputType = "number"
	console.log ("lastNumber = ", lastNumber,"lastInputType = ", lastInputType,"storedNumber = ", storedNumber);
}

function addDecimal() {
	if (lastNumber === undefined || lastInputType === "operation" || lastNumber.includes(".")) {
	} else {
		lastNumber += "."
		document.getElementById('current-entry').innerHTML = lastNumber;
		lastInputType = "number"
		
	}
}

//Process operations
function operation(opCode) {
	
	if (lastNumber == 0) {		//do nothing if no number has been entered
		
	} else if (storedNumber !== 0){	//calculate if number has been sent to storage
		calculate();
	} else {
		storedNumber = lastNumber;
	}
	
	lastOperation = opCode;
	lastInputType = "operation"
	
	
	/*if (history.length >= 16) {
		history.splice(0, 2); 
		history.push(lastNumber,lastOperation);
	} else {
		history.push(lastNumber,lastOperation);
	}
	document.getElementById('calc-history').innerHTML = history.join(' ');*/
	console.log ("lastNumber = ", lastNumber,"lastInputType = ", lastInputType,"storedNumber = ", storedNumber);
	
}

function calculate(){
	let answer = 0
	storedNumber = Number(storedNumber);
	lastNumber = Number(lastNumber);
	if (lastOperation === "*"){
		answer = storedNumber * lastNumber;
	} else if (lastOperation === "/") {
		answer = storedNumber / lastNumber;
	} else if (lastOperation === "+"){
		answer = storedNumber + lastNumber;
	} else {
		answer = storedNumber - lastNumber;
	}
	lastNumber = 0;
	storedNumber = answer;
	
	document.getElementById('current-entry').innerHTML = storedNumber;
	
}

function clear(){
	lastNumber = 0;
	storedNumber = undefined;
}

//Number Input
document.getElementById('btn0').addEventListener("click", function(){numberInput(this.innerHTML)});
document.getElementById('btn1').addEventListener("click", function(){numberInput(this.innerHTML)});
document.getElementById('btn2').addEventListener("click", function(){numberInput(this.innerHTML)});
document.getElementById('btn3').addEventListener("click", function(){numberInput(this.innerHTML)});
document.getElementById('btn4').addEventListener("click", function(){numberInput(this.innerHTML)});
document.getElementById('btn5').addEventListener("click", function(){numberInput(this.innerHTML)});
document.getElementById('btn6').addEventListener("click", function(){numberInput(this.innerHTML)});
document.getElementById('btn7').addEventListener("click", function(){numberInput(this.innerHTML)});
document.getElementById('btn8').addEventListener("click", function(){numberInput(this.innerHTML)});
document.getElementById('btn9').addEventListener("click", function(){calculate()});

//Operation Input
document.getElementById('btnDiv').addEventListener("click", function(){operation(this.innerHTML)});
document.getElementById('btnMult').addEventListener("click", function(){operation(this.innerHTML)});
document.getElementById('btnAdd').addEventListener("click", function(){operation(this.innerHTML)});
document.getElementById('btnSub').addEventListener("click", function(){operation(this.innerHTML)});
document.getElementById('btnEql').addEventListener("click", function(){operation(this.innerHTML)});

//Dot Input
document.getElementById('btnDot').addEventListener("click", function(){addDecimal()});

//Equals Input

//Clear Entry Input

//Clear Input

/*Listen for Dot
document.getElementById('dot').addEventListener("click", dot());

//Listen for Equal
document.getElementById('btnEql').addEventListener("click", equal());

//Listen for Clear
document.getElementById('clear').addEventListener("click", clear());

//Listen for Clear Entry
document.getElementById('clearEntry').addEventListener("click", clearEntry());*/


	