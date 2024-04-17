import {createUser,login} from "http://localhost:3000/scripts/api.js";


document.addEventListener("DOMContentLoaded",() =>{
    const addUserButton = document.getElementById("register");
    addUserButton.addEventListener("click", ()=>{
        // const rname = document.getElementById("regis-username").value;
        // const remail =document.getElementById("regis-email").value;
        // const rpass = document.getElementById("regis-password").value;
        createUser(
            document.getElementById("regis-username").value,
            document.getElementById("regis-email").value,
            document.getElementById("regis-password").value 
        );
    });

    const loginUserButton = document.getElementById("login");
    loginUserButton.addEventListener("click",()=>{
        login(
            document.getElementById("login-username").value,
            document.getElementById("login-password").value
        );
    });
});
