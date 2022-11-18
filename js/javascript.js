function matching(e) {
    if (password.value == "" || confirmPassword.value == "") {
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
    }
    else if (password.value == confirmPassword.value) {
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
    }
    else {
        password.setCustomValidity("Password does not match");
        safe.appendChild(doesntMatch);
        confirmPassword.setCustomValidity("password does not match")
    }
}
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const safe = document.querySelector("#safe");
const doesntMatch = document.createElement("p");
doesntMatch.innerText = "*Passwords does not match";
doesntMatch.classList.add("dmatch");
confirmPassword.addEventListener("focusout", matching);
password.addEventListener("focusout", matching);
