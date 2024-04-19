import { BACKEND_URL } from './configs.js';

export async function createPost(post) {
  const auth = localStorage.getItem('token');
  await fetch(`${BACKEND_URL}post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${auth}`,
    },
    body: JSON.stringify(post),
  });
}
