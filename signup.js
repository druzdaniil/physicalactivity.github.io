document.addEventListener('DOMContentLoaded', () => {
	const btnIN = document.querySelector('.buttonIN');
	const nameInput = document.getElementById('name');
	const gmailInput = document.getElementById('gmail');
	const loginInput = document.getElementById('login');
	const passwordInput = document.getElementById('password');
 
	btnIN.addEventListener('click', function () {
	  const name = nameInput.value.trim();
	  const gmail = gmailInput.value.trim();
	  const login = loginInput.value.trim();
	  const password = passwordInput.value.trim();
 
	  if (name !== '' && gmail !== '' && login !== '' && password !== '') {
		location.assign('main_page.html')
	  }
	});
 });