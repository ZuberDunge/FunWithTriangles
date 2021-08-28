const questionList = document.querySelector('.form-container');
const submitButton = document.querySelector('#submit-button');
const outputBox = document.querySelector('.output-box');

const correctAnswers = ['90°', 'right angled', 'IsoscelesTriangle', 'AcuteTriangle', 'Perimeter', 'Hypotenuse', 'True', '180', '5', 'ObtuseTriangle'];

function calculateScore(e) {
	e.preventDefault();
	const data = new FormData(questionList);
	let index = 0,
		score = 0;
	for (let entry of data.values()) {
		if (entry === correctAnswers[index]) {
			score++;
		}
		index++;
	}
	outputBox.innerText = `Your score is ${score}`;
}

submitButton.addEventListener('click', calculateScore);