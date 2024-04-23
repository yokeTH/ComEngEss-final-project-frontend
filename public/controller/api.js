// export const backEndUrl = 'http://localhost:3001';
export const backEndUrl = 'https://cee-final-api.yoke-th.me';
export async function createUser(username, email, password) {
  const user = await fetch(`${backEndUrl}/user/add-user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  }).then((res) => res.json());
  return user;
}

export async function login(username, password) {
  const info = await fetch(`${backEndUrl}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
  return info;
}

export async function refreshToken(token) {
  const newToken = await fetch(`${backEndUrl}/user/validate-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token,
    }),
  }).then((a) => a.json());
  return newToken;
  // ///////////////////////POST//////////////////////////////////////////////////////////
}
const token = localStorage.getItem('token');
export async function getPost() {
  const post = await fetch(`${backEndUrl}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
    },
  }).then((a) => a.json());
  return post;
}
export async function getPostById() {
  const post = await fetch(`${backEndUrl}/posts/:id`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
    },
  }).then((a) => a.json());
  return post;
}
export async function getPostByTopic() {
  const post = await fetch(`${backEndUrl}/posts/topic/:name`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      autherization: `${token}`,
    },
  }).then((a) => a.json());
  return post;
}
export async function getPostByTag() {
  const post = await fetch(`${backEndUrl}/posts/tag/:name`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      autherization: `${token}`,
    },
  }).then((a) => a.json());
  return post;
}
/// //////tag//////////////////////////////////////////////////////////
export async function getTags(name) {
  const tag = await fetch(`${backEndUrl}/tagtop/tags`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      autherization: `${token}`,
    },
  }).then((a) => a.json());
  return tag;
}
