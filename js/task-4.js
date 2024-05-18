const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();

  if (!email || !password) {
    alert("Please fill in all the fields!");
    return;
  }

  const formData = { email, password };
  console.log(formData);
  event.currentTarget.reset();
}
