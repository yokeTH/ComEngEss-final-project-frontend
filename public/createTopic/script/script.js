import { createTag, updateValue, post } from './fetchAndDraw.js';

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
});

const postButton = document.getElementById('post');
postButton.addEventListener('click', () => post());

const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('click', () => handleFile());

function handleFile() {
  const fileInput = document.getElementById('fileInput');
  const preview = document.getElementById('preview');

  const file = fileInput.files[0]; // เลือกไฟล์แรกที่ผู้ใช้เลือก
  const reader = new FileReader();

  reader.onload = function (event) {
    const imageUrl = event.target.result; // URL ของรูปภาพ
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    preview.appendChild(imageElement);
  };

  reader.readAsDataURL(file); // อ่านไฟล์เป็น URL ของข้อมูล Base64
}
