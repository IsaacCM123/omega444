let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
	showSlider('next');
}
prevDom.onclick = function(){
	showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
	nextDom.click();
}, timeAutoNext);

function showSlider(type){
	let itemSlider = document.querySelectorAll('.carousel .list .item');
	let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
	if (type === 'next'){
		listItemDom.appendChild(itemSlider[0]);
		thumbnailDom.appendChild(itemThumbnail[0]);
		carouselDom.classList.add('next');
	}else{
		let positionLastItem = itemSlider.length - 1;
		listItemDom.prepend(itemSlider[positionLastItem]);
		thumbnailDom.prepend(itemThumbnail[positionLastItem]);
		carouselDom.classList.add('prev')
	}
	clearTimeout(runTimeOut);
	runTimeOut = setTimeout(() =>{
		carouselDom.classList.remove('next');
		carouselDom.classList.remove('prev');
	}, timeRunning)

	clearTimeout(runAutoRun);
	runAutoRun = setTimeout(()=>{
		nextDom.click();
	}, timeAutoNext);
}


// ____________________________  S C R E E N   F L A S H  ____________________________
const popupScreen = document.querySelector('.popup-screen');
// const popupBox = document.querySelector('.popup-box');
const closeBtn = document.querySelector('.close-btn');

let contactanos1 = document.getElementById('contactanos1');
let contactanos2 = document.getElementById('contactanos2');
let contactanos3 = document.getElementById('contactanos3');
let contactanos4 = document.getElementById('contactanos4');
let contactanos5 = document.getElementById('contactanos5');
let contactanos6 = document.getElementById('contactanos6');
let contactanos7 = document.getElementById('contactanos7');
let contactanos8 = document.getElementById('contactanos8');
let contactanos9 = document.getElementById('contactanos9');

contactanos1.addEventListener('click', function(){popupScreen.classList.add('active');});
contactanos2.addEventListener('click', function(){popupScreen.classList.add('active');});
contactanos3.addEventListener('click', function(){popupScreen.classList.add('active');});
contactanos4.addEventListener('click', function(){popupScreen.classList.add('active');});
contactanos5.addEventListener('click', function(){popupScreen.classList.add('active');});
contactanos6.addEventListener('click', function(){popupScreen.classList.add('active');});
contactanos7.addEventListener('click', function(){popupScreen.classList.add('active');});
contactanos8.addEventListener('click', function(){popupScreen.classList.add('active');});
contactanos9.addEventListener('click', function(){popupScreen.classList.add('active');});

closeBtn.addEventListener('click', () => {
	popupScreen.classList.remove('active');
});