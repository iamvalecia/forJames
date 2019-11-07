var nameInputButton = document.getElementById('nameInputButton');
var newUserButton = document.getElementById('newUserButton');
var nameQuestionGreeting = document.getElementById('nameQuestionGreeting')
var guestName = document.getElementById('nameInput');

function setUserName() {
  window.localStorage.setItem('name', guestName.value);
  nameQuestionGreeting.textContent = 'Nice to meet you, ' + guestName.value;
  console.log(localStorage.getItem('name'))
}

if(localStorage.getItem('name')) {
  var storedName = localStorage.getItem('name');
  nameQuestionGreeting.textContent = 'Nice to meet you, ' + storedName;
} 

newUserButton.onclick = function() {
  // document.createElement("input");
  // var button = document.createElement('button')
  // button.innerHTML = '>'
  // button.id = 'nameInputButton'
  // button.className = 'btn'
  // button.setAttribute('onclick', "setUserName()")
  nameQuestionGreeting.innerHTML = "What's your name?"
  nameQuestionGreeting.appendChild(guestName)
  nameQuestionGreeting.appendChild(nameInputButton); 
  guestName.value = ""
}
