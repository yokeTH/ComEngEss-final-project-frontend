// export const backEndUrl = 'http://localhost:3001';
export const backEndUrl = 'https://cee-final-api.yoke-th.me';
export async function createUser(username, email, password) {
  const user = await fetch(`${backEndUrl}/user/add-user`, {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });
  return user.json();
}

export async function login(username, password) {
  const info = await fetch(`${backEndUrl}/user/login`, {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  return info.json();
}

export async function refreshToken(username, password) {
  const newToken = await fetch(`${backEndUrl}/user/validate-token`, {
    method: 'GET',
    body: JSON.stringify({
      token: accessToken,
    }),
  });
  return newToken;
}
