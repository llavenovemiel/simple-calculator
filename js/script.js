const result = document.querySelector("h1");

const operators = document.querySelectorAll(".operators");

const operationList = {add:(a,b) => (a + b),
					subtract:(a,b) => (a - b),
					multiply:(a,b) => (a * b),
					divide:(a,b) => (a / b)}

operators.forEach(operator => operator.addEventListener("click", () => {
	let input1 = document.querySelector("#input1").value * 1;
	let input2 = document.querySelector("#input2").value * 1;
	let operation = operationList[operator.innerHTML.toLowerCase()];
	result.innerHTML = operation(input1, input2);	
}))
