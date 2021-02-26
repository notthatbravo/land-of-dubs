// Login and Signup Page toggle Show/hide password
let eye = document.querySelector("#toggle-show-password"); // eye icon to show/hide password
let passwordInput = document.getElementsByClassName("password-input"); // input field type = password

eye.addEventListener('click', togglePassword)

function togglePassword() {
    eye.classList.toggle("fa-eye-slash"); // toggles the eye icon state

    for (var i=0; i < passwordInput.length; i++) { // loop affects the input field in login and signup page
        passwordInput[i].setAttribute("type", "text"); // changes type = password to type = text
    };

    if (eye.classList.contains("fa-eye-slash")) {
        for (var i=0; i < passwordInput.length; i++) {
            passwordInput[i].setAttribute("type", "password");
        }
    }; // this if block doesn't work
    // motive: if eye icon slashed (meaning it's currently showing the password), when it's clicked,
    // change the type = text back to type = password
};
