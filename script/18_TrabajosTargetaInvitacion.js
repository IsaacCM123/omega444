// ____________________________  S C R E E N   F L A S H  ____________________________
const popupScreen = document.querySelector('.popup-screen');
const closeBtn = document.querySelector('.close-btn');

let uneteBTN = document.getElementById('uneteBTN');

uneteBTN.addEventListener('click', function(){popupScreen.classList.add('active');});

closeBtn.addEventListener('click', () => {
	popupScreen.classList.remove('active');
});
// ____________________________  S C R O L L   P A R A   L A   I N V I T A C I O N   E N   M O V I M I E N T O  ____________________________
ScrollReveal({
	reset: false,
	distance: '150px',
	duration: 1500,
	delay: 0
});
// |||||||||||||||||||||||||  L A D O   I Z Q U I E R D O |||||||||||||||||||||||||  
ScrollReveal().reveal('.principal img', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.principal .opacidad', { delay: 2000, origin: 'bottom' });
ScrollReveal().reveal('.principal .bloqueIzquierdo .contenidoInformativo .mision, .pasajeBiblico, .capitulo, .trabajad, .contactanos', { delay: 3000, origin: 'bottom', interval: 1000 });
ScrollReveal().reveal('.principal .bloqueIzquierdo .contenidoContactos .iconoContacto', { delay: 10000, origin: 'bottom', interval: 500 });
// |||||||||||||||||||||||||  L A D O   D E R E C H O  ||||||||||||||||||||||||||||
ScrollReveal().reveal('.bloqueDerecho .iepCLS', { delay: 6000, origin: 'bottom' });
ScrollReveal().reveal('.bloqueDerecho .iepCLS .ieph6', { delay: 7000, origin: 'bottom' });
ScrollReveal().reveal('.bloqueDerecho .mayoCLS', { delay: 8000, origin: 'bottom' });
ScrollReveal().reveal('.bloqueDerecho .mayoCLS .mayo', { delay: 9000, origin: 'bottom' });
ScrollReveal().reveal('.bloqueDerecho .uneteCLS', { delay: 11000, origin: 'bottom' });
ScrollReveal().reveal('.bloqueDerecho .trabajosEspirituales', { delay: 12000, origin: 'bottom' });