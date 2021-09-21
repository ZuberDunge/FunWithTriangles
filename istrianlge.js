const angleOne = document.querySelector('#angle-one');
const angleTwo = document.querySelector('#angle-two');
const angleThree = document.querySelector('#angle-three');

const inputAngles = document.querySelectorAll('.input-angle')
const checkButton = document.querySelector('#check-button');
const outputBox = document.querySelector('#output-box');


function calculateSum() {
	const sum =
		Number(inputAngles[0].value) + Number(inputAngles[1].value) + Number(inputAngles[2].value);
	console.log(sum);
	return sum;
}

function checkTriangle() {

if(Number(inputAngles[0].value)>0 && Number(inputAngles[1].value)>0 && Number(inputAngles[2].value)>0){



	if (calculateSum() === 180) {
		console.log('Yayy, the angles form a triangle');
		outputBox.innerText = 'Yayy, the angles form a triangle';
	} else {
		console.log('Oh Oh!, the angles do not form a triangle');
		outputBox.innerText = 'Oh Oh!, the angles do not form a triangle';
	}
}else{

	outputBox.innerText = 'Enter Valid Angles!';

}



}
checkButton.addEventListener('click', checkTriangle);