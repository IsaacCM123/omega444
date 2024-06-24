let mediaElements = document.querySelectorAll('video');
for(let i = 0, total = mediaElements.length; i < total; i++)
{
	let features = ['playpause', 'current', 'progress', 'duration', 'volume', 'skipback', 'jumpforward', 'speed', 'fullscreen'];
	new MediaElementPlayer(mediaElements[i], {
		autoRewind: false,
		features: features,
	});
}