let oLogin = document.querySelector('.login');
let oCreate = document.querySelector('.create');
let oContainer = document.querySelector('.container');
oLogin.onclick = function(){
  oContainer.classList.add('signinForm');
}
oCreate.onclick = function(){
  oContainer.classList.remove('signinForm');
}
// validacion de los elementos de la contraseña
let passwordField = document.getElementById("tbxPassword");
let confirmPasswordField = document.getElementById("tbxConfirmPassword");
let form = document.getElementById("form");
form.addEventListener("submit", function(event) {
  if (passwordField.value !== confirmPasswordField.value) {
    event.preventDefault();
    alert("Las contraseñas no coinciden");
  }
});
// Mostrar la contraseña
let passwordInput = document.getElementById("tbxPassword");
let showPasswordButton = document.getElementById("showPassword");
let icon = document.getElementById(".fa-sharp");
let confirmPasswordInput = document.getElementById("tbxConfirmPassword");
let showConfirmPasswordButton = document.getElementById("showConfirmPassword");
let passwordIdInput = document.getElementById("tbxPasswordId");
let showPassworIdButton = document.getElementById("showPasswordId");
showPasswordButton.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordButton.style.opacity = 0.2;
  } else {
    passwordInput.type = "password";
    showPasswordButton.style.opacity = 1;
  }
});
showConfirmPasswordButton.addEventListener("click", () => {
  if (confirmPasswordInput.type === "password") {
    confirmPasswordInput.type = "text";
    showConfirmPasswordButton.style.opacity = 0.2;
  } else {
    confirmPasswordInput.type = "password";
    showConfirmPasswordButton.style.opacity = 1;
  }
});
showPassworIdButton.addEventListener("click", () => {
  if (passwordIdInput.type === "password") {
    passwordIdInput.type = "text";
    showPassworIdButton.style.opacity = 0.2;
  } else {
    passwordIdInput.type = "password";
    showPassworIdButton.style.opacity = 1;
  }
});






