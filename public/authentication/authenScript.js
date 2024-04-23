import { createUser, login } from "../controller/api.js";
// import { freshToken } from '../main.js';
document.addEventListener("DOMContentLoaded", async () => {
  const addUserButton = document.getElementById("register");
  addUserButton.addEventListener("click", async () => {
    const name = document.getElementById("regis-username").value;
    const email = document.getElementById("regis-email").value;
    const password = document.getElementById("regis-password").value;
    // add valid user
    if (isValidEmail(email)) {
      const response = await createUser(name, email, password);

      const status = await response.status;
      const message = status.message;
      console.log(message);
      if (message === "success") {
        setTimeout(500);
        window.location.href = "../authentication/authen.html";
      } else if (message.includes("username")) {
        popupTool("This username has been used");
      } else if (message.includes("email")) {
        popupTool("This email has been used");
      }
    } else {
      popupTool("this is not email");
    }
  });
  const wrapper = document.querySelector(".wrapper");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");

  registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
  });
  loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
  });

  const loginUserButton = document.getElementById("login");
  loginUserButton.addEventListener("click", async () => {
    // e.preventDefault
    const name = document.getElementById("login-username").value;
    const pass = document.getElementById("login-password").value;
    const response = await login(name, pass);
    const message = await response.status.message;
    console.log(response);
    if (message === "Username not found" || message === "Wrong password") {
      popupTool("username or password incorrect");
    } else if (message === "success") {
      const token = await response.data.access_token;

      localStorage.setItem("token", token);
      console.log(localStorage.getItem("token"));
      window.location.href = "../homepage/home.html";
    }
  });

  // ////////////////////////////////////TOOL IN TOOL/////////////////////////////////////////
  function popupTool(message) {
    const popup = document.getElementById("myPopup");
    document.getElementById("myPopup").innerHTML = message;
    popup.classList.toggle("show");
    setTimeout(() => {
      tryagain();
    }, 2000);
    function tryagain() {
      popup.classList.toggle("show");
    }
  }

  function isValidPassword(password) {
    // Check if password length is between 8 and 20 characters
    if (password.length < 8) {
      popupTool("Password length must be between 8 and 20 characters.");
      return false;
    }

    // Check if password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      popupTool("Password must contain at least one uppercase letter.");
      return false;
    }

    // Check if password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      popupTool("Password must contain at least one lowercase letter.");
      return false;
    }

    // Check if password contains at least one digit
    if (!/[0-9]/.test(password)) {
      popupTool("Password must contain at least one digit.");
      return false;
    }

    // If all conditions are met, return true
    return true;
  }

  function isValidEmail(email) {
    // Regular expression for validating an email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    popupTool("Email not correct");
    // Test the email against the regular expression
    return emailRegex.test(email);
  }
});
