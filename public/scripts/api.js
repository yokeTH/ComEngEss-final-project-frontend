export const backEndUrl = 'http://localhost:3001';

export async function createUser(username, email, password) {
  await fetch(`${backEndUrl}/user/add-user`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });
}

export async function login(username, password) {
  const info = await fetch(`${backEndUrl}/user/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  return info.json();
}
