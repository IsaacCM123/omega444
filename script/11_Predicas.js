function abrirContenido(evt, testimonioDelHno){
	let i, contenido, enlaceAlContenido;
	contenido = document.getElementsByClassName('contenido');
	for (i = 0; i < contenido.length; i++)
	{
		contenido[i].style.display = 'none';
	}
	enlaceAlContenido = document.getElementsByClassName('enlaceAlContenido');
	for (i = 0; i < enlaceAlContenido.length; i++)
	{
		enlaceAlContenido[i].className.replace('active', '');
	}
	document.getElementById(testimonioDelHno).style.display = 'block';
	evt.currentTarget.className += 'active';
}


let aux1 = document.getElementById('abrirContenido1-ID');
let aux2 = document.getElementById('abrirContenido2-ID');
let aux3 = document.getElementById('abrirContenido3-ID');
aux1.addEventListener('click', function(){
	aux1.style.borderBottom = '0.7vh solid #0bb63b';
	aux2.style.borderBottom = 'none';
	aux3.style.borderBottom = 'none';
	aux1.style.opacity = '1.0';
	aux2.style.opacity = '0.3';
	aux3.style.opacity = '0.3';
});
aux2.addEventListener('click', function(){
	aux2.style.borderBottom = '0.7vh solid #0bb63b';
	aux1.style.borderBottom = 'none';
	aux3.style.borderBottom = 'none';
	aux1.style.opacity = '0.3';
	aux2.style.opacity = '1.0';
	aux3.style.opacity = '0.3';
});
aux3.addEventListener('click', function(){
	aux3.style.borderBottom = '0.7vh solid #0bb63b';
	aux1.style.borderBottom = 'none';
	aux2.style.borderBottom = 'none';
	aux1.style.opacity = '0.3';
	aux2.style.opacity = '0.3';
	aux3.style.opacity = '1.0';
});