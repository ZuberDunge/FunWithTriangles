const sideInputA = document.querySelector('#side-input-a');
const sideInputB = document.querySelector('#side-input-b');
const checkButton = document.querySelector('#check-button');
const outputBox = document.querySelector('#output-box');


function calculateSumOfSquares(a, b) {
	const sumOfSquares = a * a + b * b;
	return sumOfSquares;

  
}

function calculateHypotenuse() {
	// formula : c = sqrt(a^2 + b^2)
    var sideInputAA = sideInputA.value;
    var sideInputBB = sideInputB.value;

	const sumOfSquares = calculateSumOfSquares(sideInputA.value, sideInputB.value);

	console.log(sumOfSquares);
    
	const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
	console.log(lengthOfHypotenuse);
	outputBox.innerText = `The length of the hypotenuse is ${toFixedIfNecessary(lengthOfHypotenuse, 2)} cm`;

    if(sumOfSquares&&sideInputAA&&sideInputBB)
    compareVlues(sumOfSquares.value, sideInputA.value, sideInputB.value);
    else
    outputBox.innerText="Please Enter all fields!"
}


function toFixedIfNecessary( value, points ){
	return +parseFloat(value).toFixed( points );
  }
  


checkButton.addEventListener('click', calculateHypotenuse);