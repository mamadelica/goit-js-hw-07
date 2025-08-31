const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailEl = formEl.querySelector('[name="email"]').value.trim();
  const passwordEl = formEl.querySelector('[name="password"]').value.trim();

  if (emailEl === "" || passwordEl === "") {
    return alert("All form fields must be filled in");
  }

  const userData = {
    email: emailEl,
    password: passwordEl,
  };
  console.log(userData);
  formEl.reset();
});
