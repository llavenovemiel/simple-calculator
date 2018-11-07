(function(){
	const result = document.querySelector("h1");

	const operators = document.querySelectorAll(".operators");

	const operationList =	{add:(a,b) => (a + b),
							subtract:(a,b) => (a - b),
							multiply:(a,b) => (a * b),
							divide:(a,b) => (a / b)}

	let input1, input2, operation;

	operators.forEach(operator => operator.addEventListener("click", () => {
		input1 = document.querySelector("#input1").value * 1;
		input2 = document.querySelector("#input2").value * 1;
		operation = operationList[operator.innerHTML.toLowerCase()];
		result.innerHTML = operation(input1, input2);	
	}))


	// //below is the for loop version of above

	// for (let operator of operators) {
	// 	operator.addEventListener("click", function () {
	// 		input1 = document.querySelector("#input1").value * 1;
	// 		input2 = document.querySelector("#input2").value * 1;
	// 		operation = operationList[operator.innerHTML.toLowerCase()];
	// 		result.innerHTML = operation(input1, input2);
	// 	})
	// }

})();


