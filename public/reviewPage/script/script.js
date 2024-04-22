import { fetchAndDraw } from './fetchAndDraw.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#post').addEventListener('click', () => {
    window.location.href = '../../createReview/index.html';
  });
  fetchAndDraw();
});
