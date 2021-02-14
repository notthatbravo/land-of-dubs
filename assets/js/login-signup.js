// Login and Signup Page toggle Show/hide password
let eye = document.querySelector("#toggle-show-password");
let passwordInput = document.getElementsByClassName("password-input");

eye.addEventListener('click', togglePassword)

function togglePassword() {
    for (var i=0; i < passwordInput.length; i++) {
        passwordInput[i].setAttribute("type", "text");
    }
    eye.classList.toggle("fa-eye-slash");

    if (hasClass(eye, "fa-eye-slash")) {
        passwordInput.setAttribute("type", "password");
    }; // this if block doesn't work
};
