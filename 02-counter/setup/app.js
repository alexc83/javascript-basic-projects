//variables
const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const resetBtn = document.querySelector('.reset');
const value = document.querySelector('#value');

// functions
const adjustCount = (num) => {
	const valueNum = Number(value.textContent);
	if (valueNum + num >= 0) {
		 value.textContent = num + valueNum;
	}
}

const resetCount = () => {
	value.textContent = 0;
}


// event listener
decreaseBtn.addEventListener('click', () => {
	adjustCount(-1);
});
increaseBtn.addEventListener('click', () => {
	adjustCount(1);
});
resetBtn.addEventListener('click', resetCount);