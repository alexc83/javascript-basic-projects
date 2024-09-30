const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// variables
const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

// functions
const randNum = () => {
	return Math.trunc(Math.random() * 16);
}

const changeColor = () => {
	let hexNumber = '#';
	for (let i = 0; i < 6; i++) {
		const num = randNum();
		hexNumber += hex[num];
	}
	body.style.backgroundColor = hexNumber;
	color.textContent = hexNumber;
}

// event handler
btn.addEventListener('click', () => {
	changeColor();
});