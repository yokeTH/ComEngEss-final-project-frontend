// import { createPost } from "../../api.js";

let tags = [];
let imageUrl = '';

export async function drawTable() {}

export async function createTag() {
  const score = document.getElementById('add-tag-slider').value;
  const nameTag = document.getElementById('add-tag').value;

  if (nameTag !== '' && tags.find((e) => e.nameTag === nameTag) === undefined) {
    tags.push({ nameTag, score });
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
  // const userId = localStorage.getItem('userId');
  const topicName = document.querySelector('#add-topic').value;
  const description = document.querySelector('#add-description').value;
  if (topicName !== '' && description !== '' && imageUrl !== '') {
    // await createPost({userId:userId,topicName:topicName,tags:tags,photoUrl:imageUrl,description:description})
    tags = [];
    drawTable();
  }
}

export async function handleFile() {
  const fileInput = document.getElementById('fileInput');
  const preview = document.getElementById('preview');

  const file = fileInput.files[0]; // เลือกไฟล์แรกที่ผู้ใช้เลือก
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function () {
    imageUrl = reader.result; // URL ของรูปภาพ
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    preview.appendChild(imageElement);
  };
}
