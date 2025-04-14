const canvasWeek = document.getElementById('chart-week').getContext('2d');
const canvasMonth = document.getElementById('chart-month').getContext('2d');

let chartWeek = new Chart(canvasWeek, {
	type: 'bar',
	data: {
		labels: ['Біг', 'Велосипед', 'Плавання', 'Йога', 'Ходьба', 'Тенніс'],
		datasets: [{
			label: 'Активність за тиждень (год)',
			data: [1.43, 2.55, 5.11, 4.02, 5.65, 7.78],  //Приклад
			backgroundColor: '#097e95',
			borderColor: '#065471',
			borderWidth: 3,
			borderRadius: 5,
		}]
	},
	options: {
		maintainAspectRatio: false,
		responsive: true,
		layout: {
			padding: {
				top: 0,
				left: 10,
				right: 15,
				bottom: 5,
			}
		}
	}
})

let charMonth = new Chart(canvasMonth, {
	type: 'bar',
	data: {
		labels: ['Біг', 'Велосипед', 'Плавання', 'Йога', 'Ходьба', 'Тенніс'],
		datasets: [{
			label: 'Активність за місяць (год)',
			data: [4, 8, 16, 12, 8, 24],  //Приклад
			backgroundColor: '#097e95',
			borderColor: '#065471',
			borderWidth: 3,
			borderRadius: 5,
		}]
	},
	options: {
		maintainAspectRatio: false,
		responsive: true,
		layout: {
			padding: {
				top: 0,
				left: 10,
				right: 15,
				bottom: 5,
			}
		}
	}
});

const tableContainer = document.querySelector('.table-container');
document.addEventListener('mousemove', function(e) {
	let dx = e.pageX - window.innerWidth / 2
	let dy = e.pageY - window.innerHeight / 2
	let angleX = 20 * dx / window.innerWidth / 2
	let angleY = 20 * dy / window.innerHeight / 2
	tableContainer.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
});