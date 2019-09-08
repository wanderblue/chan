// The code in add.js handles what happens when the user clicks the "Add a book" button.
// When user clicks add-btn

/* eslint-disable no-undef */
// When user hits the author-search-btn
document.querySelector('#author-search-btn').addEventListener('click', function () {
  // Save the author they typed into the author-search input
  var authorSearched = document.querySelector('#author-search').value.trim()

  // Make an AJAX get request to our api, including the user's author in the url
  fetch('/api/author/' + authorSearched)
    .then(response => response.json())
    .then(function (data) {
      // Log the data to the console
      console.log(data)
      document.querySelector('#author-search').value = ''
      document.querySelector('#message').innerHTML = ''
      for (var i = 0; i < data.length; i++) {
        // Create a parent div to hold book data
        var wellSection = `<div class="well bg-light container border border-info border-1 mb-2 p-2 " id="book-well-${i}">
        <h4>Author: ${data[i].userName}</h4>
        <div class="row">
          <div class="col-1 pr-0 mr-0 ">
            <h4>Topic:</h4>
          </div>
          <div class="text-uppercase">
            <h4>${data[i].topic}</h4>
          </div>
        </div>
        <h4> ${data[i].text}</h4>
        <img src = '${data[i].media}' class="w-25"> 
        </div>`
        // var wellSection = `<div class="well" id="book-well-${i}"><h2>${(i + 1)}.${data[i].board}</h2><h4>Author: ${data[i].userName}</h4><h4>topic: ${data[i].topic}</h4><h4>text: ${data[i].text}</h4><img src = '${data[i].media}'> ~~~~~~~</div>`

        // append the well to the well section
        document.querySelector('#message').insertAdjacentHTML('afterbegin', wellSection)
      }
      // Call our renderBooks function to add our books to the page
    })
})

// When user hits the genre-search-btn
document.querySelector('#topic-search-btn').addEventListener('click', function () {
  // Save the book they typed into the genre-search input
  var commentSearched = document.querySelector('#topic-search').value.trim()

  // Make an AJAX get request to our api, including the user's genre in the url
  fetch('/api/topic/' + commentSearched)
    .then(response => response.json())
    .then(function (data) {
      console.log(data)
      // Call our renderBooks function to add our books to the page
      document.querySelector('#topic-search').value = ''
      document.querySelector('#message').innerHTML = ''
      for (var i = 0; i < data.length; i++) {
        // Create a parent div to hold book data
        var wellSection = `<div class="well bg-light container border border-info border-1 mb-2 p-2 " id="book-well-${i}">
        <h4>Author: ${data[i].userName}</h4>
        <div class="row">
          <div class="col-1 pr-0 mr-0 ">
            <h4>Topic:</h4>
          </div>
          <div class="text-uppercase">
            <h4>${data[i].topic}</h4>
          </div>
        </div>
        <h4> ${data[i].text}</h4>
        <img src = '${data[i].media}' class="w-25"> 
        </div>`
        // var wellSection = `<div class="well" id="book-well-${i}"><h2>${(i + 1)}.${data[i].board}</h2><h4>Author: ${data[i].userName}</h4><h4>topic: ${data[i].topic}</h4><h4>text: ${data[i].text}</h4><img src = '${data[i].media}'> ~~~~~~~</div>`

        // append the well to the well section
        document.querySelector('#message').insertAdjacentHTML('afterbegin', wellSection)
      }
      // Call our renderBooks function to add our books to the page
    })
})

/* eslint-enable no-undef */
