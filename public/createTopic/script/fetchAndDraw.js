let tags = [];
let count = 0;

export async function drawTable() {
  const root = document.getElementById('pane-tag');
  const currentVal = document.getElementById('add-tag-slider').value;
  root.innerHTML = '';

  const textTag = document.createElement('h1');
  textTag.innerText = 'TAG';
  textTag.setAttribute('class', 'text-tag');
  root.appendChild(textTag);

  const shadow = document.createElement('div');
  shadow.setAttribute('class', 'shadox-box-tag');
  root.appendChild(shadow);

  const boxTag = document.createElement('div');
  boxTag.setAttribute('class', 'box-tag');

  const divVal = document.createElement('div');
  divVal.setAttribute('class', 'val');
  const scorePane = document.createElement('h1');
  scorePane.setAttribute('id', 'val');
  scorePane.innerText = currentVal;
  divVal.appendChild(scorePane);
  boxTag.appendChild(divVal);

  const sliderBar = document.createElement('input');
  sliderBar.setAttribute('type', 'range');
  sliderBar.setAttribute('min', '1');
  sliderBar.setAttribute('max', '10');
  sliderBar.setAttribute('value', `${currentVal}`);
  sliderBar.setAttribute('step', '1');
  sliderBar.setAttribute('class', 'add-tag-slider');
  sliderBar.setAttribute('id', 'add-tag-slider');
  sliderBar.addEventListener('change', () => updateValue());

  boxTag.appendChild(sliderBar);

  const divInput = document.createElement('div');
  divInput.setAttribute('class', 'input-submit');
  const textInput = document.createElement('input');
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('placeholder', 'ADD YOUR TAG');
  textInput.setAttribute('class', 'add-tag');
  textInput.setAttribute('id', 'add-tag');

  const addButton = document.createElement('button');
  addButton.innerText = '+';
  addButton.setAttribute('type', 'submit');
  addButton.setAttribute('id', 'submit');
  addButton.addEventListener('click', () => createTag());
  divInput.appendChild(textInput);
  divInput.appendChild(addButton);
  boxTag.appendChild(divInput);

  root.appendChild(boxTag);
  for (const obj of tags) {
    const score = obj.score;
    const nameTag = obj.nameTag;
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
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '-';
    deleteButton.setAttribute('class', 'delete-button');
    deleteButton.addEventListener('click', () => deleteTag(nameTag));
    divInput.appendChild(textInput);
    divInput.appendChild(deleteButton);
    boxTag.appendChild(divInput);

    root.appendChild(boxTag);
  }
}

export async function createTag() {
  count++;
  const score = document.getElementById('add-tag-slider').value;
  const nameTag = document.getElementById('add-tag').value;

  if (nameTag !== '' && tags.find((e) => e.nameTag === nameTag) === undefined) {
    tags.push({ nameTag, score, id: count });
    drawTable();
  }
}

export async function deleteTag(id) {
  tags = tags.filter((e) => e.nameTag !== id);
  drawTable();
  console.log(tags);
}

export function updateValue() {
  const value = document.getElementById('add-tag-slider').value;
  const val = document.getElementById('val');
  val.innerText = value;
}

export async function post() {
  const nameTopic = document.querySelector('#add-topic').value;
  const description = document.querySelector('#add-description').value;
  if (nameTopic !== '' && description !== '') {
    tags = [];
    drawTable();
  }
}
