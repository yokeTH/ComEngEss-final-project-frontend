const topic = 'Topic';
const imgUrl = localStorage.getItem('imgUrl');
// const imgUrl = "";

const posts = [
  {
    photoUrl: imgUrl,
    tags: [
      { name: 'ความสวย', score: 10 },
      { name: 'ความงง', score: 8 },
      { name: 'ความตลก', score: 3 },
    ],
  },
  {
    photoUrl: imgUrl,
    tags: [
      { name: 'ความนอย', score: 5 },
      { name: 'ความตลก', score: 7 },
    ],
  },
];

export async function fetchAndDraw() {
  draw(posts);
}

export async function draw(posts) {
  document.getElementById('topic').innerText = topic;

  const root = document.querySelector('.div');
  root.innerHTML = '';
  for (const post of posts) {
    const imgUrl = post.photoUrl;
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
}
