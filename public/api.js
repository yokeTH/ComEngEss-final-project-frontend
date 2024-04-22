import { BACKEND_URL } from './configs.js';

export async function createPost(post) {
  // const auth = localStorage.getItem('token');
  // console.log(auth)
  // console.log(post)

  await fetch(`${BACKEND_URL}posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjI1NDU5ZjBiN2M5YWEzYzEzOGQ2MmMiLCJleHAiOjE3MTM4MDIzOTB9.XNlq9FqTUHAuSExHNab-IB-IPlP40_lOu5DYFglO5ro',
    },

    body: JSON.stringify(post),
  });
}

export async function getPostbyTopic(topicName) {
  const posts = await fetch(`${BACKEND_URL}posts/topic/${topicName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjI1NDU5ZjBiN2M5YWEzYzEzOGQ2MmMiLCJleHAiOjE3MTM4MDIzOTB9.XNlq9FqTUHAuSExHNab-IB-IPlP40_lOu5DYFglO5ro',
    },
  }).then((res) => res.json());
  console.log(`getPostbyTopic : ${posts}`);
  return posts.data;
}
