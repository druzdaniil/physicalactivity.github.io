document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form');
	const loginInput = document.getElementById('login');
	const passwordInput = document.getElementById('password');
 
	form.addEventListener('submit', function (e) {
	  const login = loginInput.value.trim();
	  const password = passwordInput.value.trim();
 
	  if (login !== '' && password !== '') {
		location.assign('main_page.html')
	  }
	});
 });