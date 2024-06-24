let mediaElements = document.querySelectorAll('video');
for(let i = 0, total = mediaElements.length; i < total; i++)
{
	let features = ['playpause', 'current', 'progress', 'duration', 'volume', 'skipback', 'jumpforward', 'speed', 'fullscreen'];
	new MediaElementPlayer(mediaElements[i], {
		autoRewind: false,
		features: features,
	});
}

// P O R T A   I M A G E N E S   D E   L O S   C O R I S T A S - P R I M E R A   P A R T E.
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
	if (active + 1 > lengthItems){
		active = 0;
	}else{
		active = active + 1;
	}
	reloadSlider();
}
prev.onclick = function(){
	if (active - 1 < 0){
		active = lengthItems;
	}else{
		active = active - 1;
	}
	reloadSlider()
}
let refreshSlider = setInterval(()=>{next.click()}, 3000);
function reloadSlider(){
	let checkLeft = items[active].offsetLeft;
	list.style.left = -checkLeft + 'px';

	let lastActiveDot = document.querySelector('.slider .dots li.active');
	lastActiveDot.classList.remove('active');
	dots[active].classList.add('active');
	clearInterval(refreshSlider);
	refreshSlider = setInterval(()=>{next.click()}, 3000);
}
dots.forEach((li, key) => {
	li.addEventListener('click', function(){
		active = key;
		reloadSlider();
	})
});

// P O R T A   I M A G E N E S   D E   L O S   C O R I S T A S   -   S E G U N D A   P A R T E.

// ____________________________  S C R E E N   F L A S H  ____________________________
let popupScreen = document.querySelector('.popup-screen');
let closeBtn = document.querySelector('.close-btn1');
let popupBox = document.querySelector('.popup-box');

let contactanos1 = document.getElementById('contactanos1');

contactanos1.addEventListener('click', function(){
	popupBox.style.display = 'block';
	popupScreen.classList.add('active');
});

closeBtn.addEventListener('click', () => {
	popupBox.style.display = 'none';
	popupScreen.classList.remove('active');
});

let list1 = document.querySelector('.list1');
let items1 = document.querySelectorAll('.item1');
let prev1 = document.getElementById('prev1');
let next1 = document.getElementById('next1');

let active1 = 0;
let lengthItems1 = items1.length - 1;

next1.addEventListener('click', function(){
	if (active1 + 1 > lengthItems1)
	{
		active1 = 0;
	}
	else
	{
		active1 = active1 + 1;
	}
	reloadSlider1();
});

prev1.addEventListener('click', function(){
	if (active1 - 1 < 0)
	{
		active1 = lengthItems1;
	}
	else
	{
		active1 = active1 - 1;
	}
	reloadSlider1()
});

function reloadSlider1()
{
	let checkLeft = items1[active1].offsetLeft;
	list1.style.left = -checkLeft + 'px';
}

// ____________________________  S C R O L L   P A R A   L A   I N V I T A C I O N   E N   M O V I M I E N T O  ____________________________
ScrollReveal({
	reset: false,
	distance: '500px',
	duration: 10000,
	delay: 5
});
ScrollReveal().reveal('.primeroEventos .bloqueSecundarioEventos .pluma', { delay: 5, origin: 'left' });
ScrollReveal({
	reset: false,
	distance: '0px',
	duration: 30,
	delay: 0
});
ScrollReveal().reveal('.primeroEventos .bloqueSecundarioEventos h5', { delay: 2500, origin: 'left', interval: 150 });