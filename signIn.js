document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form');
	const loginInput = document.getElementById('login');
	const passwordInput = document.getElementById('password');
 
	form.addEventListener('submit', function (e) {
	  const login = loginInput.value.trim();
	  const password = passwordInput.value.trim();
 
	  if (login === '' || password === '') {
		alert('Будь ласка, заповніть усі поля');
	  } else {
		location.assign('main_page.html')
	  }
	});
 });