// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select items
const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// review index - initial at 0
let reviewIndex = 0 

// functions
const changeReview = (review) => {
	author.textContent = review.name;
	img.src = review.img;
	job.textContent = review.job;
	info.textContent = review.text;
}

const previous = () => {
	if (reviewIndex === 0) {
		reviewIndex = 3;
	} else {
		reviewIndex -= 1;
	}
	
	changeReview(reviews[reviewIndex]);
}

const next = () => {
	if (reviewIndex === 3) {
		reviewIndex = 0;
	} else {
		reviewIndex += 1;
	}
	
	changeReview(reviews[reviewIndex]);
}

const random = () => {
	let randNum = -1;
	do {
		randNum = Math.trunc(Math.random() * 4);
	} while (randNum === reviewIndex);
	reviewIndex = randNum;
	changeReview(reviews[reviewIndex]);
}

// event listener
prevBtn.addEventListener('click', previous);

nextBtn.addEventListener('click', next);

randomBtn.addEventListener('click', random);