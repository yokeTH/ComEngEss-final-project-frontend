document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('add-tag-slider');
  slider.addEventListener('change', () => {
    updateValue();
  });

  const submit = document.getElementById('submit');
  submit.addEventListener('click', () => {
    addTag();
  });

  const img = document.getElementById('fileInput');
  img.addEventListener('input', handleFile);
});

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

export function updateValue() {
  const value = document.getElementById('add-tag-slider').value;
  const val = document.getElementById('val');
  val.innerText = value;
}

export function addTag() {
  const score = document.getElementById('add-tag-slider').value;
  const nameTag = document.getElementById('add-tag').value;
  console.log(score);
  console.log(nameTag);

  const root = document.getElementById('pane-tag');

  const boxTag = document.createElement('div');
  boxTag.setAttribute('class', 'box-tag');

  const divVal = document.createElement('div');
  divVal.setAttribute('class', 'val');
  const scorePane = document.createElement('h1');
  scorePane.innerText = score;
  divVal.appendChild(scorePane);
  boxTag.appendChild(divVal);

  const sliderBar = document.createElement('input');
  sliderBar.setAttribute('type', 'range');
  sliderBar.setAttribute('min', '1');
  sliderBar.setAttribute('max', '10');
  sliderBar.setAttribute('value', score);
  sliderBar.setAttribute('step', '1');
  sliderBar.setAttribute('class', 'add-tag-slider');
  sliderBar.setAttribute('style', '-webkit-appearance: none;');
  sliderBar.setAttribute('style', 'pointer-events: none;');
  boxTag.appendChild(sliderBar);

  const divInput = document.createElement('div');
  divInput.setAttribute('class', 'input-submit');
  const textInput = document.createElement('h1');
  textInput.innerText = nameTag;
  textInput.setAttribute('class', 'add-tag');
  divInput.appendChild(textInput);
  boxTag.appendChild(divInput);

  root.appendChild(boxTag);
}
