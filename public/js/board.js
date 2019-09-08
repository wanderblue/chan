
/* eslint-disable no-undef */
// Make a get request to our api route that will return every book
fetch('/api/board/dogs')
  .then(response => response.json())
  .then(function (data) {
    // For each book that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold book data

      var wellSection = `<div class="well" id="book-well-${i}"><h2>${(i + 1)}.${data[i].board}</h2><h4>Author: ${data[i].userName}</h4><h4>topic: ${data[i].topic}</h4><h4>text: ${data[i].text}</h4><img src = '${data[i].media}'> ~~~~~~~</div>`

      // append the well to the well section
      document.querySelector('#well-section').insertAdjacentHTML('afterbegin', wellSection)
    }
  })
/* eslint-enable no-undef */
