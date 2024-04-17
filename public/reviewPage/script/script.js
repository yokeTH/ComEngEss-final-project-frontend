import { createTag, updateValue, post, handleFile } from './fetchAndDraw.js';

document.addEventListener('DOMContentLoaded', () => {
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

  const fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('click', () => handleFile());
});
