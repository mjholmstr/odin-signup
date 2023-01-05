const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector("#confirm-password");
const errorMessage = document.querySelector(".errorMessage");

const inputs = [email, phone, password, confirmPassword];

inputs.forEach(item => {
    item.addEventListener("focusin", () => {
        errorMessage.textContent = "";
        item.classList.remove('error');
        if (item == password || item == confirmPassword) {
            password.classList.remove('error');
            confirmPassword.classList.remove('error');
        }
    });
});

const submit = (e) => {
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        errorMessage.textContent = "Passwords do not match";
        return;
    }
    if (!phone.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
        phone.classList.add('error');
        errorMessage.textContent = "Phone number invalid";
        return;
    }
    if (password.value.length < 8) {
        password.classList.add('error');
        errorMessage.textContent = "Password must be at least 8 characters";
        return;
    }
    errorMessage.textContent = "Form submitted successfully"
    setTimeout(() => {
        window.location.reload();
    }, 5000);

};

const form = document.querySelector("form")
form.addEventListener("submit", submit);