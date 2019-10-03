// DOM ELEMENT REFERENCES
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const submitButton = document.getElementById('submit-button');
const sidebar = document.getElementById('sidebar');
const commentForm = document.getElementById('comment-form');

submitButton.addEventListener('click', ($event) => {
  $event.preventDefault();
  sidebar.textContent = 'Hi there, ' + firstNameInput.value + ' ' + lastNameInput.value;
  commentForm.reset()
  
});

// DOM ELEMENT REFERENCES
const hobbiesResult = document.getElementById('hobbies-result');
const transportResult = document.getElementById('transport-result');
const musicResult = document.getElementById('music-result');

document.getElementById('sports-checkbox').addEventListener('change', ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[0].classList.remove('text-secondary')
  } else {
    hobbiesResult.children[0].classList.add('text-secondary')
  }
  
});

document.getElementById('games-checkbox').addEventListener('change', ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[1].classList.remove('text-secondary')
  } else {
    hobbiesResult.children[1].classList.add('text-secondary')
  }
  
});

document.getElementById('music-checkbox').addEventListener('change', ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[2].classList.remove('text-secondary')
  } else {
    hobbiesResult.children[2].classList.add('text-secondary')
  }
  
});

//FAVOURITE MODE OF TRANSPORT


for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', ($event) => {
    transportResult.textContent = $event.target.value
  })
}

 musicDropDown.addEventListener('change', ($event) => {
    musicResult.textContent = $event.target.value
  })



