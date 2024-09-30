const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// variables
const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

// functions
const newColor = () => {
    const randNum = Math.trunc(Math.random() * 4);
    return colors[randNum];
}

const changeColor = (nextColor) => {
    body.style.backgroundColor = nextColor;
	color.textContent = nextColor;
}


// event listener
btn.addEventListener('click', () => {
    const nextColor = newColor();
    changeColor(nextColor);
	

})
