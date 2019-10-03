// DOM ELEMENT REFERENCES
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const submitButton = document.getElementById('submit-button');
const sidebar = document.getElementById('sidebar');

submitButton.addEventListener('click', () => {
  sidebar.textContent = `Hello there, I am ${firstNameInput.value} ${lastNameInput.value}`
});
