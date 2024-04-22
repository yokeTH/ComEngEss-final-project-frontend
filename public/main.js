import { refreshToken } from './controller/api.js';
document.addEventListener('DOMContentLoaded', async () => {
  const welcome = document.querySelector('.set-to-click');
  // Check if element exists before adding event listener
  console.log(welcome);
  welcome.addEventListener('click', async () => {
    const token = localStorage.getItem('token');
    const newToken = await refreshToken(token);
    console.log(newToken);
    console.log(token);
    if (newToken.data === 'expired') {
      window.location.href = '../authentication/authen.html';
    } else {
      window.location.href = '../homepage/home.html';
    }
  });

  async function freshToken() {
    if (window.localStorage.localStorage != './index.html' && window.location.href != './authentication/authen.html') {
      const oldToken = localStorage.getItem('token');
      const newToken = await refreshToken(oldToken);
      localStorage.setItem('token', newToken);
    }
  }
});
