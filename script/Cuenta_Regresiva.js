// Cuenta Regresiva E L I M I M A R   D E S P U E S 
const $dias = document.getElementById('dias'),
 $horas = document.getElementById('horas'),
 $minutos = document.getElementById('minutos'),
 $segundos = document.getElementById('segundos');


 // Fecha de las conferencias. . .
 const fechaConferencia = new Date('Dec 03, 2024 00:00:00').getTime(); 

let intervalo = setInterval(function(){
	// Obtener fecha actual y milisegundos
	const hoy = new Date().getTime();

	// Obtener las distancias entre ambas fechas
	let lapsoDeTiempo = fechaConferencia - hoy;

	// Calculos a dias minutos segundos
	let dias = Math.floor(lapsoDeTiempo / (1000 * 60 * 60 * 24));
	let horas = Math.floor((lapsoDeTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutos = Math.floor((lapsoDeTiempo % (1000 * 60 * 60)) / (1000 * 60));
	let segundos = Math.floor((lapsoDeTiempo % (1000 * 60)) / (1000));

	// Escribimos resultados
	$dias.innerHTML = dias;
	$horas.innerHTML = horas;
	$minutos.innerHTML = minutos;
	$segundos.innerHTML = ('0' + segundos).slice(-2);

	// Cuando llegue a 0
	if (lapsoDeTiempo < 0)
	{
		clearInterval(intervalo);
	}
}, 1000);