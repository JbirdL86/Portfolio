const form = document.getElementById('contact');

function saveToStorage() {
  const formInput = {
    name: document.getElementById('name').value,
    email: document.getElementById('mail').value,
    message: document.getElementById('msg').value,
  };
  localStorage.setItem('formInput', JSON.stringify(formInput));
}

function setValues() {
  const data = JSON.parse(localStorage.getItem('formInput'));
  form.user_name.value = data.name;
  form.user_email.value = data.email;
  form.user_message.value = data.message;
}

form.addEventListener('input', saveToStorage);
setValues();