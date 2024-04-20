import { createUser, login } from 'http://localhost:3000/controller/api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const addUserButton = document.getElementById('register');
  addUserButton.addEventListener('click', async () => {
    const response = await createUser(
      document.getElementById('regis-username').value,
      document.getElementById('regis-email').value,
      document.getElementById('regis-password').value,
    );
    const massage = response;
    console.log(massage);
    // if (massage === 'require password' || massage === 'require email' || massage === 'require username') {
    //   popupTool(massage);
    // } else {
    //   window.location.href = '../authentication/authen.html';
    // }
  });

  const loginUserButton = document.getElementById('login');
  loginUserButton.addEventListener('click', async () => {
    // e.preventDefault
    const name = document.getElementById('login-username').value;
    const pass = document.getElementById('login-password').value;
    const response = await login(name, pass);
    const massage = response.status.massage;
    console.log(response.status);
    // if (massage === 'Wrong password') {
    //   popupTool(massage);
    // } else if (massage === 'Username not found') {
    //   popupTool(massage);
    // } else if (massage === 'success') {
    //   localStorage.setItem('token', response.accessToken);
    //   window.location.href = '../homepage/home.html';
    // }
  });

  function popupTool(massage) {
    const popup = document.getElementById('myPopup');
    document.getElementById('myPopup').innerHTML = massage;
    popup.classList.toggle('show');
    const wrongtime = setTimeout(tryagain, 3000);
    function tryagain() {
      popup.classList.toggle('show');
    }
  }
});
