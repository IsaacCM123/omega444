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