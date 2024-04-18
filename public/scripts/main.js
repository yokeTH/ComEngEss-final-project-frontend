import { createUser, login } from 'http://localhost:3000/scripts/api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const addUserButton = document.getElementById('register');
  addUserButton.addEventListener('click', () => {
    // const rname = document.getElementById("regis-username").value;
    // const remail =document.getElementById("regis-email").value;
    // const rpass = document.getElementById("regis-password").value;
    createUser(
      document.getElementById('regis-username').value,
      document.getElementById('regis-email').value,
      document.getElementById('regis-password').value,
    );
    window.location.href = '../authentication/authen.html';
  });

  const loginUserButton = document.getElementById('login');
  loginUserButton.addEventListener('click', async () => {
    // e.preventDefault
    try {
      const name = document.getElementById('login-username').value;
      const pass = document.getElementById('login-password').value;
      const response = await login(name, pass);
      // localStorage.setItem("accessToken",)

      console.log(response.data);
      localStorage.setItem('token', response.data.accessToken);
      window.location.href = '../homepage/home.html';
    } catch (e) {
      console.log('wrong password');
    }
  });
});
