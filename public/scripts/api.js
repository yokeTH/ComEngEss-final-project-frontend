export const backEndUrl = "http://localhost:3001";

export async function createUser(username,email,password) {
    await fetch(`${BackEndURL}/user/add-user`, {
      method: "POST",
      
      body: JSON.stringify({
        username:username,
        email:email,
        password:password

      }),
    });
  }

export async function login(user){
    await fetch(`${BackEndURL}/user/login`,{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body :JSON.stringify(user)
    })
}