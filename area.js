const BaseInput = document.querySelector('#base-input');
const heightInput = document.querySelector('#height-input');
const checkButton = document.querySelector('#check-button');
const outputBox = document.querySelector('#output-box');


function calculateAreaOfTriangle(a, b) {
	const AreaOfTriangle = 0.5*a*b;
	return AreaOfTriangle;

  
}

function calculateArea() {
	// formula : c = sqrt(a^2 + b^2)
    var BaseInputA = BaseInput.value;
    var heightInputB = heightInput.value;

	const AreaOfTriangle = calculateAreaOfTriangle(BaseInput.value, heightInput.value);

	console.log(AreaOfTriangle);
    

	outputBox.innerText = `The area of the triangle is   ${AreaOfTriangle} cm²`;

    if(AreaOfTriangle&&BaseInputA&&heightInputB)
    compareVlues(AreaOfTriangle.value, BaseInputA.value, heightInputB.value);
    else
    outputBox.innerText="Please Enter all fields!"
}

checkButton.addEventListener('click', calculateArea);