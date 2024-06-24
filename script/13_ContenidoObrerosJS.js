// C o n t e n i d o   d e   o b r e r o s   JS
let deslizador = document.querySelector('.pantallaCompletaDeslizador');
let currentSlide = 0;
let totalSlides = deslizador.querySelectorAll('.envoltorioAll .ladoIzquierdo > div').length - 1;

deslizador.querySelector('.controlesArribaAbajo .flechaArriba').addEventListener('click', function(){
	if (currentSlide == 0){
		return;
	}
	currentSlide--;
	deslizador.querySelector('.envoltorioAll .ladoIzquierdo div').style.marginTop = `${currentSlide*-100}vh`;
	deslizador.querySelector('.envoltorioAll .ladoDerecho div').style.marginTop = `${(totalSlides-currentSlide)*-100}vh`;
});

deslizador.querySelector('.controlesArribaAbajo .flechaAbajo').addEventListener('click', function(){
	if (currentSlide == totalSlides){
		return;
	}
	currentSlide++;
	deslizador.querySelector('.envoltorioAll .ladoIzquierdo div').style.marginTop = `${currentSlide*-100}vh`;
	deslizador.querySelector('.envoltorioAll .ladoDerecho div').style.marginTop = `${(totalSlides-currentSlide)*-100}vh`;
});



// D A R   C L I C K   E N   B U T T O N   V E R   M A S   Y   B U S C A R   L A   I M A G E N   C O R R E S P O N D I E N T E
// R E S P O N S I V E . . . . .
function pastor1(){
	deslizador.querySelector('.envoltorioAll .ladoDerecho div').style.marginTop = '-800vh';
	deslizador.querySelector('.envoltorioAll .ladoIzquierdo div').style.marginTop = '-0vh';
}
function cuerpoNinos2(){
	deslizador.querySelector('.envoltorioAll .ladoDerecho div').style.marginTop = '-700vh';
	deslizador.querySelector('.envoltorioAll .ladoIzquierdo div').style.marginTop = '-100vh';
}
function cuerpoIntermedio3(){
	deslizador.querySelector('.envoltorioAll .ladoDerecho div').style.marginTop = '-600vh';
	deslizador.querySelector('.envoltorioAll .ladoIzquierdo div').style.marginTop = '-200vh';
}
function cuerpoSenoritas(){
	deslizador.querySelector('.envoltorioAll .ladoDerecho div').style.marginTop = '-500vh';
	deslizador.querySelector('.envoltorioAll .ladoIzquierdo div').style.marginTop = '-300vh';
}
function cuerpoJovenes(){
	deslizador.querySelector('.envoltorioAll .ladoDerecho div').style.marginTop = '-400vh';
	deslizador.querySelector('.envoltorioAll .ladoIzquierdo div').style.marginTop = '-400vh';
}
function cuerpoDorcas(){
	deslizador.querySelector('.envoltorioAll .ladoDerecho div').style.marginTop = '-300vh';
	deslizador.querySelector('.envoltorioAll .ladoIzquierdo div').style.marginTop = '-500vh';
}
function cuerpoVoluntarios(){
	deslizador.querySelector('.envoltorioAll .ladoDerecho div').style.marginTop = '-200vh';
	deslizador.querySelector('.envoltorioAll .ladoIzquierdo div').style.marginTop = '-600vh';
}
function cuerpoTerceraEdad(){
	deslizador.querySelector('.envoltorioAll .ladoDerecho div').style.marginTop = '-100vh';
	deslizador.querySelector('.envoltorioAll .ladoIzquierdo div').style.marginTop = '-700vh';
}
function cuerpoOficiales(){
	deslizador.querySelector('.envoltorioAll .ladoDerecho div').style.marginTop = '-0vh';
	deslizador.querySelector('.envoltorioAll .ladoIzquierdo div').style.marginTop = '-800vh';
}
// I N F O R M A C I O N
let btnInformacion = document.getElementById('btn-informacion');
let ladoIzquierdo = document.getElementById('L-I');
let ladoDerecho = document.getElementById('L-D');
let activado = false;

btnInformacion.addEventListener('click', function(){
	if (activado == false)
	{
		activado = true;
		ladoIzquierdo.style.width = '0%';
		ladoDerecho.style.width = '100%';
		btnInformacion.innerHTML= 'INFORMACIÓN';
	}
	else if (activado == true)
	{
		activado = false;
		ladoIzquierdo.style.width = '100%';
		ladoDerecho.style.width = '0%';
		btnInformacion.innerHTML= 'IMÁGENES';
	}
});