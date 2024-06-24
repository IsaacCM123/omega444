let mediaElements = document.querySelectorAll('video');
for(let i = 0, total = mediaElements.length; i < total; i++)
{
	let features = [''];
	new MediaElementPlayer(mediaElements[i], {
		autoRewind: false,
		features: features,
	});
}