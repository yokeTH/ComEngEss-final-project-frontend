import {login,createUser} from "./api";
document.addEventListener("DOMContentLoaded",() =>{
    const addUserButton = document.getElementById("Register");
    addUserButton.addEventListener("click", ()=>{
        createUser(
            document.getElementById("register-username"),
            document.getElementById("register-email"),
            document.getElementById("register-password")
    )
    })
})