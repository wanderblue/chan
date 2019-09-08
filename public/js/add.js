// The code in add.js handles what happens when the user clicks the "Add a book" button.
// When user clicks add-btn

/* eslint-disable no-undef */
document.querySelector('#add-btn').addEventListener('click', function (event) {
  event.preventDefault()

  // Make a newBook object
  var newTopic = {
    topic: document.querySelector('#topic').value.trim(),
    userName: document.querySelector('#author').value.trim(),
    media: document.querySelector('#media').value.trim(),
    text: document.querySelector('#text').value.trim(),
    type: 1,
    board: document.querySelector('#board').value.trim()
  }

  // Send the POST request.
  fetch('/api/new', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTopic)
  })
    // On success, run the following code
    .then(function (data) {
      // Log the data we found
      console.log(data)
    })

  // Empty each input box by replacing the value with an empty string
  document.querySelector('#topic').value = ''
  document.querySelector('#author').value = ''
  document.querySelector('#media').value = ''
  document.querySelector('#text').value = ''
  document.querySelector('#board').value = ''
})
/* eslint-enable no-undef */
