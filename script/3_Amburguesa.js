/* Menu Amburguesa*/
let amburguesa = document.getElementById('amburguesa');
cambiarAequis = false;
function cambiar()
{
	if (cambiarAequis == false)
	{
		cambiarAequis = true;
		amburguesa.style.paddingBottom = '1%';
		amburguesa.innerHTML = '&#xD7;';
	}
	else
	{
		cambiarAequis = false;
		amburguesa.style.paddingBottom = '0%';
		amburguesa.innerHTML = '&#8801;';
	}
}