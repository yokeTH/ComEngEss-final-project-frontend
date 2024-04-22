import { getPostbyTopic } from '../../api.js';

// const topicName = localStorage.getItem('topicName');
const topicName = 'Test';
// const imgUrl = localStorage.getItem('imgUrl');
// const imgUrl = "";

let posts = [];

export async function fetchAndDraw() {
  posts = await getPostbyTopic(topicName);
  console.log(`fetch ${posts}`);
  draw(posts);
}

export async function draw(posts) {
  document.getElementById('topic').innerText = topicName;

  const root = document.querySelector('.div');
  root.innerHTML = '';
  // if(posts.length !== 0){
  for (const post of posts) {
    const imgUrl = post.photoUrl;
    console.log(imgUrl);
    const tags = post.tags;

    const postComponent = document.createElement('div');
    postComponent.setAttribute('class', 'post-component');

    const postBackground = document.createElement('div');
    postBackground.setAttribute('class', 'post-background');
    const img = document.createElement('img');
    img.setAttribute('src', imgUrl);
    img.setAttribute('class', 'img');

    postBackground.appendChild(img);
    postComponent.appendChild(postBackground);

    const tagComponent = document.createElement('div');
    tagComponent.setAttribute('class', 'tag-component');

    for (const tag of tags) {
      const eachTag = document.createElement('div');
      eachTag.setAttribute('class', 'each-tag');
      eachTag.setAttribute('style', 'display: flex;');
      const tagValue = document.createElement('h2');
      tagValue.setAttribute('class', 'value');
      tagValue.innerText = `${tag.name} ${tag.score}`;
      eachTag.appendChild(tagValue);
      const len = 9 * tag.score;
      eachTag.setAttribute('style', `width:${len}%`);
      tagComponent.appendChild(eachTag);
    }

    postComponent.appendChild(tagComponent);
    root.appendChild(postComponent);
  }
  // }
}
