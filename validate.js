const submitButton = document.getElementById('submit');
const email = document.getElementById('mail');

email.value = 'FErnando@gmail.com';
submitButton.addEventListener('click', () => {
  const emailString = email.value;

  if (emailString === emailString.toLowerCase()) {
    submitButton.setCustomValidity('');
  } else {
    submitButton.setCustomValidity('Email input characters must be lower case!');
    submitButton.preventDefault();
  }
});