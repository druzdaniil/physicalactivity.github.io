document.addEventListener('DOMContentLoaded', () => {
	const btnIN = document.querySelector('.buttonIN');
	const loginInput = document.getElementById('login');
	const passwordInput = document.getElementById('password');
 
	btnIN.addEventListener('click', function () {
	  const login = loginInput.value.trim();
	  const password = passwordInput.value.trim();
 
	  if (login !== '' && password !== '') {
		location.assign('main_page.html')
	  }
	});
 });