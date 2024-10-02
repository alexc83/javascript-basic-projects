// classList - shows/gets all classes

// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// variables
const navButton = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// functions
const toggleNavButton = () => {
	links.classList.toggle('show-links');
}

// event listener
navButton.addEventListener('click', toggleNavButton);