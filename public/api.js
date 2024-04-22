import { BACKEND_URL } from './configs.js';
const auth =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjI1NDU5ZjBiN2M5YWEzYzEzOGQ2MmMiLCJleHAiOjE3MTM4Mzk1MzN9.4m2aSHcceLrDver_kyQWffL2jr2rdOCNsT9RfmLuUF4';

export async function createPost(post) {
  // console.log(auth)
  // console.log(post)

  await fetch(`${BACKEND_URL}posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: auth,
    },

    body: JSON.stringify(post),
  });
}

export async function getPostbyTopic(topicName) {
  const posts = await fetch(`${BACKEND_URL}posts/topic/${topicName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: auth,
    },
  }).then((res) => res.json());
  console.log(`getPostbyTopic : ${posts}`);
  return posts.data;
}
