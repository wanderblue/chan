// The code in add.js handles what happens when the user clicks the "Add a book" button.
// When user clicks add-btn

/* eslint-disable no-undef */
document.querySelector('#add-btn').addEventListener('click', function (event) {
  event.preventDefault()

  // Make a newBook object
  var newUser = {
    userName: document.querySelector('#InputEmail1').value.trim(),
    password: document.querySelector('#InputPassword1').value.trim()
  }

  // Send the POST request.
  fetch('/api/newuser', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser)
  })
    // On success, run the following code
    .then(function (data) {
      // Log the data we found
      console.log(data)
    })
  // Empty each input box by replacing the value with an empty string
  document.querySelector('#InputPassword1').value = ''
  document.querySelector('#InputEmail1').value = ''
})
/* eslint-enable no-undef */
