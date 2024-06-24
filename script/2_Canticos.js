// Cancion 1
button1.addEventListener('click', function(){
	if (SegundaCancionEnReproduccion == true
		|| TerceraCancionEnReproduccion == true
		|| CuartaCancionEnReproduccion == true
		|| QuintaCancionEnReproduccion == true
		|| SextaCancionEnReproduccion == true
		|| SeptimaCancionEnReproduccion == true
		|| OctavaCancionEnReproduccion == true
		|| NovenaCancionEnReproduccion == true
		|| DecimaCancionEnReproduccion == true){

		SegundaCancionEnReproduccion = false;
		TerceraCancionEnReproduccion = false;
		CuartaCancionEnReproduccion = false;
		QuintaCancionEnReproduccion = false;
		SextaCancionEnReproduccion = false;
		SeptimaCancionEnReproduccion = false;
		OctavaCancionEnReproduccion = false;
		NovenaCancionEnReproduccion = false;
		DecimaCancionEnReproduccion = false;

		audio2.pause();
		audio3.pause();
		audio4.pause();
		audio5.pause();
		audio6.pause();
		audio7.pause();
		audio8.pause();
		audio9.pause();
		audio10.pause();

		audio2.currentTime = 0;
		audio3.currentTime = 0;
		audio4.currentTime = 0;
		audio5.currentTime = 0;
		audio6.currentTime = 0;
		audio7.currentTime = 0;
		audio8.currentTime = 0;
		audio9.currentTime = 0;
		audio10.currentTime = 0;

		PrimeraCancionEnReproduccion = true;
		audio1.play();
	}
	else{ PrimeraCancionEnReproduccion = true; audio1.play(); }
});
function parar1(){ audio1.pause(); audio1.currentTime = 0; PrimeraCancionEnReproduccion = false; }

// Cancion 2
button2.addEventListener('click', function()
{
	if (PrimeraCancionEnReproduccion == true
		|| TerceraCancionEnReproduccion == true
		|| CuartaCancionEnReproduccion == true
		|| QuintaCancionEnReproduccion == true
		|| SextaCancionEnReproduccion == true
		|| SeptimaCancionEnReproduccion == true
		|| OctavaCancionEnReproduccion == true
		|| NovenaCancionEnReproduccion == true
		|| DecimaCancionEnReproduccion == true){

		PrimeraCancionEnReproduccion = false;
		TerceraCancionEnReproduccion =  false;
		CuartaCancionEnReproduccion =  false;
		QuintaCancionEnReproduccion =  false;
		SextaCancionEnReproduccion =  false;
		SeptimaCancionEnReproduccion =  false;
		OctavaCancionEnReproduccion =  false;
		NovenaCancionEnReproduccion =  false;
		DecimaCancionEnReproduccion =  false;

		audio1.pause();
		audio3.pause();
		audio4.pause();
		audio5.pause();
		audio6.pause();
		audio7.pause();
		audio8.pause();
		audio9.pause();
		audio10.pause();

		audio1.currentTime = 0;
		audio3.currentTime = 0;
		audio4.currentTime = 0;
		audio5.currentTime = 0;
		audio6.currentTime = 0;
		audio7.currentTime = 0;
		audio8.currentTime = 0;
		audio9.currentTime = 0;
		audio10.currentTime = 0;

		SegundaCancionEnReproduccion = true;
		audio2.play();
	}
	else{ SegundaCancionEnReproduccion = true; audio2.play(); }
});
function parar2(){ audio2.pause(); audio2.currentTime = 0; SegundaCancionEnReproduccion = false; }

// Cancion 3
button3.addEventListener('click', function()
{
	if (PrimeraCancionEnReproduccion == true
		|| SegundaCancionEnReproduccion == true
		|| CuartaCancionEnReproduccion == true
		|| QuintaCancionEnReproduccion == true
		|| SextaCancionEnReproduccion == true
		|| SeptimaCancionEnReproduccion == true
		|| OctavaCancionEnReproduccion == true
		|| NovenaCancionEnReproduccion == true
		|| DecimaCancionEnReproduccion == true){

		PrimeraCancionEnReproduccion = false;
		SegundaCancionEnReproduccion = false;
		CuartaCancionEnReproduccion = false;
		QuintaCancionEnReproduccion = false;
		SextaCancionEnReproduccion = false;
		SeptimaCancionEnReproduccion =  false;
		OctavaCancionEnReproduccion =  false;
		NovenaCancionEnReproduccion =  false;
		DecimaCancionEnReproduccion =  false;

		audio1.pause();
		audio2.pause();
		audio4.pause();
		audio5.pause();
		audio6.pause();
		audio7.pause();
		audio8.pause();
		audio9.pause();
		audio10.pause();

		audio1.currentTime = 0;
		audio2.currentTime = 0;
		audio4.currentTime = 0;
		audio5.currentTime = 0;
		audio6.currentTime = 0;
		audio7.currentTime = 0;
		audio8.currentTime = 0;
		audio9.currentTime = 0;
		audio10.currentTime = 0;

		TerceraCancionEnReproduccion = true;
		audio3.play();
	}
	else{ TerceraCancionEnReproduccion = true; audio3.play(); }
});
function parar3(){ audio3.pause(); audio3.currentTime = 0; TerceraCancionEnReproduccion = false; }


// Cancion 4
button4.addEventListener('click', function()
{
	if (PrimeraCancionEnReproduccion == true
		|| SegundaCancionEnReproduccion == true
		|| TerceraCancionEnReproduccion == true
		|| QuintaCancionEnReproduccion == true
		|| SextaCancionEnReproduccion == true
		|| SeptimaCancionEnReproduccion == true
		|| OctavaCancionEnReproduccion == true
		|| NovenaCancionEnReproduccion == true
		|| DecimaCancionEnReproduccion == true){

		PrimeraCancionEnReproduccion = false;
		SegundaCancionEnReproduccion = false;
		TerceraCancionEnReproduccion = false;
		QuintaCancionEnReproduccion = false;
		SextaCancionEnReproduccion = false;
		SeptimaCancionEnReproduccion =  false;
		OctavaCancionEnReproduccion =  false;
		NovenaCancionEnReproduccion =  false;
		DecimaCancionEnReproduccion =  false;

		audio1.pause();
		audio2.pause();
		audio3.pause();
		audio5.pause();
		audio6.pause();
		audio7.pause();
		audio8.pause();
		audio9.pause();
		audio10.pause();

		audio1.currentTime = 0;
		audio2.currentTime = 0;
		audio3.currentTime = 0;
		audio5.currentTime = 0;
		audio6.currentTime = 0;
		audio7.currentTime = 0;
		audio8.currentTime = 0;
		audio9.currentTime = 0;
		audio10.currentTime = 0;

		CuartaCancionEnReproduccion = true;
		audio4.play();
	}
	else{ CuartaCancionEnReproduccion = true; audio4.play(); }
});
function parar4(){ audio4.pause(); audio4.currentTime = 0; CuartaCancionEnReproduccion = false; }


// Cancion 5
button5.addEventListener('click', function()
{
	if (PrimeraCancionEnReproduccion == true
		|| SegundaCancionEnReproduccion == true
		|| TerceraCancionEnReproduccion == true
		|| CuartaCancionEnReproduccion == true
		|| SextaCancionEnReproduccion == true
		|| SeptimaCancionEnReproduccion == true
		|| OctavaCancionEnReproduccion == true
		|| NovenaCancionEnReproduccion == true
		|| DecimaCancionEnReproduccion == true){

		PrimeraCancionEnReproduccion = false;
		SegundaCancionEnReproduccion = false;
		TerceraCancionEnReproduccion = false;
		CuartaCancionEnReproduccion = false;
		SextaCancionEnReproduccion = false;
		SeptimaCancionEnReproduccion =  false;
		OctavaCancionEnReproduccion =  false;
		NovenaCancionEnReproduccion =  false;
		DecimaCancionEnReproduccion =  false;

		audio1.pause();
		audio2.pause();
		audio3.pause();
		audio4.pause();
		audio6.pause();
		audio7.pause();
		audio8.pause();
		audio9.pause();
		audio10.pause();

		audio1.currentTime = 0;
		audio2.currentTime = 0;
		audio3.currentTime = 0;
		audio4.currentTime = 0;
		audio6.currentTime = 0;
		audio7.currentTime = 0;
		audio8.currentTime = 0;
		audio9.currentTime = 0;
		audio10.currentTime = 0;

		QuintaCancionEnReproduccion = true;
		audio5.play();
	}
	else{ QuintaCancionEnReproduccion = true; audio5.play(); }
});
function parar5(){ audio5.pause(); audio5.currentTime = 0; QuintaCancionEnReproduccion = false; }


// Cancion 6
button6.addEventListener('click', function()
{
	if (PrimeraCancionEnReproduccion == true
		|| SegundaCancionEnReproduccion == true
		|| TerceraCancionEnReproduccion == true
		|| CuartaCancionEnReproduccion == true
		|| QuintaCancionEnReproduccion == true
		|| SeptimaCancionEnReproduccion == true
		|| OctavaCancionEnReproduccion == true
		|| NovenaCancionEnReproduccion == true
		|| DecimaCancionEnReproduccion == true){

		PrimeraCancionEnReproduccion = false;
		SegundaCancionEnReproduccion = false;
		TerceraCancionEnReproduccion = false;
		CuartaCancionEnReproduccion = false;
		QuintaCancionEnReproduccion = false;
		SeptimaCancionEnReproduccion =  false;
		OctavaCancionEnReproduccion =  false;
		NovenaCancionEnReproduccion =  false;
		DecimaCancionEnReproduccion =  false;

		audio1.pause();
		audio2.pause();
		audio3.pause();
		audio4.pause();
		audio5.pause();
		audio7.pause();
		audio8.pause();
		audio9.pause();
		audio10.pause();

		audio1.currentTime = 0;
		audio2.currentTime = 0;
		audio3.currentTime = 0;
		audio4.currentTime = 0;
		audio5.currentTime = 0;
		audio7.currentTime = 0;
		audio8.currentTime = 0;
		audio9.currentTime = 0;
		audio10.currentTime = 0;

		SextaCancionEnReproduccion = true;
		audio6.play();
	}
	else{ SextaCancionEnReproduccion = true; audio6.play(); }
});
function parar6(){ audio6.pause(); audio6.currentTime = 0; SextaCancionEnReproduccion = false; }



// Cancion 7
button7.addEventListener('click', function()
{
	if (PrimeraCancionEnReproduccion == true
		|| SegundaCancionEnReproduccion == true
		|| TerceraCancionEnReproduccion == true
		|| CuartaCancionEnReproduccion == true
		|| QuintaCancionEnReproduccion == true
		|| SextaCancionEnReproduccion == true
		|| OctavaCancionEnReproduccion == true
		|| NovenaCancionEnReproduccion == true
		|| DecimaCancionEnReproduccion == true){

		PrimeraCancionEnReproduccion = false;
		SegundaCancionEnReproduccion = false;
		TerceraCancionEnReproduccion = false;
		CuartaCancionEnReproduccion = false;
		QuintaCancionEnReproduccion = false;
		SextaCancionEnReproduccion =  false;
		OctavaCancionEnReproduccion =  false;
		NovenaCancionEnReproduccion =  false;
		DecimaCancionEnReproduccion =  false;

		audio1.pause();
		audio2.pause();
		audio3.pause();
		audio4.pause();
		audio5.pause();
		audio6.pause();
		audio8.pause();
		audio9.pause();
		audio10.pause();

		audio1.currentTime = 0;
		audio2.currentTime = 0;
		audio3.currentTime = 0;
		audio4.currentTime = 0;
		audio5.currentTime = 0;
		audio6.currentTime = 0;
		audio8.currentTime = 0;
		audio9.currentTime = 0;
		audio10.currentTime = 0;

		SeptimaCancionEnReproduccion = true;
		audio7.play();
	}
	else{ SeptimaCancionEnReproduccion = true; audio7.play(); }
});
function parar7(){ audio7.pause(); audio7.currentTime = 0; SeptimaCancionEnReproduccion = false; }


// Cancion 8
button8.addEventListener('click', function()
{
	if (PrimeraCancionEnReproduccion == true
		|| SegundaCancionEnReproduccion == true
		|| TerceraCancionEnReproduccion == true
		|| CuartaCancionEnReproduccion == true
		|| QuintaCancionEnReproduccion == true
		|| SextaCancionEnReproduccion == true
		|| SeptimaCancionEnReproduccion == true
		|| NovenaCancionEnReproduccion == true
		|| DecimaCancionEnReproduccion == true){

		PrimeraCancionEnReproduccion = false;
		SegundaCancionEnReproduccion = false;
		TerceraCancionEnReproduccion = false;
		CuartaCancionEnReproduccion = false;
		QuintaCancionEnReproduccion = false;
		SextaCancionEnReproduccion =  false;
		SeptimaCancionEnReproduccion =  false;
		NovenaCancionEnReproduccion =  false;
		DecimaCancionEnReproduccion =  false;

		audio1.pause();
		audio2.pause();
		audio3.pause();
		audio4.pause();
		audio5.pause();
		audio6.pause();
		audio7.pause();
		audio9.pause();
		audio10.pause();

		audio1.currentTime = 0;
		audio2.currentTime = 0;
		audio3.currentTime = 0;
		audio4.currentTime = 0;
		audio5.currentTime = 0;
		audio6.currentTime = 0;
		audio7.currentTime = 0;
		audio9.currentTime = 0;
		audio10.currentTime = 0;

		OctavaCancionEnReproduccion = true;
		audio8.play();
	}
	else{ OctavaCancionEnReproduccion = true; audio8.play(); }
});
function parar8(){ audio8.pause(); audio8.currentTime = 0; OctavaCancionEnReproduccion = false; }


// Cancion 9
button9.addEventListener('click', function()
{
	if (PrimeraCancionEnReproduccion == true
		|| SegundaCancionEnReproduccion == true
		|| TerceraCancionEnReproduccion == true
		|| CuartaCancionEnReproduccion == true
		|| QuintaCancionEnReproduccion == true
		|| SextaCancionEnReproduccion == true
		|| SeptimaCancionEnReproduccion == true
		|| OctavaCancionEnReproduccion == true
		|| DecimaCancionEnReproduccion == true){

		PrimeraCancionEnReproduccion = false;
		SegundaCancionEnReproduccion = false;
		TerceraCancionEnReproduccion = false;
		CuartaCancionEnReproduccion = false;
		QuintaCancionEnReproduccion = false;
		SextaCancionEnReproduccion =  false;
		SeptimaCancionEnReproduccion =  false;
		OctavaCancionEnReproduccion =  false;
		DecimaCancionEnReproduccion =  false;

		audio1.pause();
		audio2.pause();
		audio3.pause();
		audio4.pause();
		audio5.pause();
		audio6.pause();
		audio7.pause();
		audio8.pause();
		audio10.pause();

		audio1.currentTime = 0;
		audio2.currentTime = 0;
		audio3.currentTime = 0;
		audio4.currentTime = 0;
		audio5.currentTime = 0;
		audio6.currentTime = 0;
		audio7.currentTime = 0;
		audio8.currentTime = 0;
		audio10.currentTime = 0;

		NovenaCancionEnReproduccion = true;
		audio9.play();
	}
	else{ NovenaCancionEnReproduccion = true; audio9.play(); }
});
function parar9(){ audio9.pause(); audio9.currentTime = 0; NovenaCancionEnReproduccion = false; }




// Cancion 10
button10.addEventListener('click', function()
{
	if (PrimeraCancionEnReproduccion == true
		|| SegundaCancionEnReproduccion == true
		|| TerceraCancionEnReproduccion == true
		|| CuartaCancionEnReproduccion == true
		|| QuintaCancionEnReproduccion == true
		|| SextaCancionEnReproduccion == true
		|| SeptimaCancionEnReproduccion == true
		|| OctavaCancionEnReproduccion == true
		|| NovenaCancionEnReproduccion == true){

		PrimeraCancionEnReproduccion = false;
		SegundaCancionEnReproduccion = false;
		TerceraCancionEnReproduccion = false;
		CuartaCancionEnReproduccion = false;
		QuintaCancionEnReproduccion = false;
		SextaCancionEnReproduccion =  false;
		SeptimaCancionEnReproduccion =  false;
		OctavaCancionEnReproduccion =  false;
		NovenaCancionEnReproduccion =  false;

		audio1.pause();
		audio2.pause();
		audio3.pause();
		audio4.pause();
		audio5.pause();
		audio6.pause();
		audio7.pause();
		audio8.pause();
		audio9.pause();

		audio1.currentTime = 0;
		audio2.currentTime = 0;
		audio3.currentTime = 0;
		audio4.currentTime = 0;
		audio5.currentTime = 0;
		audio6.currentTime = 0;
		audio7.currentTime = 0;
		audio8.currentTime = 0;
		audio9.currentTime = 0;

		DecimaCancionEnReproduccion = true;
		audio10.play();
	}
	else{ DecimaCancionEnReproduccion = true; audio10.play(); }
});
function parar10(){ audio10.pause(); audio10.currentTime = 0; DecimaCancionEnReproduccion = false; }