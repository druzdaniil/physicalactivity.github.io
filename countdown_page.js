const timeSetter = document.querySelector('.time-setter');
const countdown = document.querySelector('.countdown');
const btnStart = document.querySelector('.btn-start');

countdown.style.display = 'none';
timeSetter.style.display = 'flex';

btnStart.addEventListener('click', () => {
	timeSetter.style.display = 'none';
	countdown.style.display = 'contents';

	const hourInput = parseInt(document.querySelector('.hours').value);
	const minInput = parseInt(document.querySelector('.minutes').value);
	const secInput = parseInt(document.querySelector('.seconds').value);

	let time = secInput + minInput*60 + hourInput*3600;
	countdown.innerHTML = ''

	let countdownInterval = setInterval(() => {
		let hours = Math.floor(time / 3600).toString().padStart(2, '0');
		let mins = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
		let secs = (time % 60).toString().padStart(2, '0');
		countdown.innerHTML = `${hours}:${mins}:${secs}`;
		time--;

		if (time <= 0) {
			clearInterval(countdownInterval);
		}
	}, 1000);

	setTimeout(() => {
		location.replace('stat_page.html');
	}, (secInput + minInput*60 + hourInput*3600)*1000 + 1000)
});