import { checkToken } from '../../main.js';
import { fetchAndDraw } from './fetchAndDraw.js';

document.addEventListener('DOMContentLoaded', () => {
  checkToken();
  document.querySelector('#post').addEventListener('click', () => {
    const query = new URLSearchParams(window.location.search);
    const topicName = query.get('topic');
    console.log(`query : ${topicName}`);
    window.location.href = `../../createReview/index.html?topic=${topicName}`;
  });
  fetchAndDraw();
});
