// The code in add.js handles what happens when the user clicks the "Add a book" button.
// When user clicks add-btn

/* eslint-disable no-undef */
document.querySelector('#add-btn').addEventListener('click', function (event) {
  event.preventDefault()

  // Make a newBook object
  var updatedUser = {
    userName: document.querySelector('#exampleInputEmail1').value.trim(),
    password: document.querySelector('#exampleInputPassword1').value.trim()
  }

  // This function updates a todo in our database
  fetch('/api/user/' + updatedUser.userName, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedUser)
  }) // On success, run the following code
    .then(function (data) {
      // Log the data we found
      console.log(data)
    })
  // Empty each input box by replacing the value with an empty string
  document.querySelector('#exampleInputPassword1').value = ''
  document.querySelector('#exampleInputEmail1').value = ''
  document.querySelector('#message').insertAdjacentHTML('afterbegin', 'password updated!')
})

/* eslint-enable no-undef */
