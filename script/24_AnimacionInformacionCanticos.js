ScrollReveal({
	reset: false,
	distance: '200px',
	duration: 1500,
	delay: 0
});



ScrollReveal().reveal('.principal .primeraCaja', { delay: 1000, origin: 'top' });
ScrollReveal().reveal('.principal .segundaCaja', { delay: 2000, origin: 'left' });
ScrollReveal().reveal('.principal .terceraCaja', { delay: 3000, origin: 'bottom' });


ScrollReveal().reveal('.principal .primeraCaja .mitadArriba1', { delay: 4000, origin: 'top' });
ScrollReveal().reveal('.principal .primeraCaja .mitadAbajo1', { delay: 4500, origin: 'bottom' });

ScrollReveal().reveal('.principal .segundaCaja .mitadArriba2', { delay: 5000, origin: 'top' });
ScrollReveal().reveal('.principal .segundaCaja .mitadAbajo2', { delay: 5500, origin: 'bottom' });

ScrollReveal().reveal('.principal .terceraCaja .mitadArriba3', { delay: 6000, origin: 'top' });
ScrollReveal().reveal('.principal .terceraCaja .mitadAbajo3', { delay: 6500, origin: 'bottom' });