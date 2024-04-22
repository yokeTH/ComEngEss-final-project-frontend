import { BACKEND_URL } from './configs.js';
const token = localStorage.getItem('token');

export async function createPost(post) {
  // console.log(auth)
  // console.log(post)

  await fetch(`${BACKEND_URL}posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },

    body: JSON.stringify(post),
  });
}

export async function getPostbyTopic(topicName) {
  const posts = await fetch(`${BACKEND_URL}posts/topic/${topicName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  }).then((res) => res.json());
  console.log(`getPostbyTopic : ${posts}`);
  return posts.data;
}
