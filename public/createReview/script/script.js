import { createTag, updateValue, post, handleFile, drawTable } from './fetchAndDraw.js';

document.addEventListener('DOMContentLoaded', () => {
  drawTable();
  const slider = document.getElementById('add-tag-slider');
  slider.addEventListener('change', () => {
    updateValue();
  });

  const submit = document.getElementById('submit');
  submit.addEventListener('click', () => {
    createTag();
  });

  const img = document.getElementById('fileInput');
  img.addEventListener('input', handleFile);

  const postButton = document.getElementById('post');
  postButton.addEventListener('click', () => post());
});
