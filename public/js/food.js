
/* eslint-disable no-undef */
// Make a get request to our api route that will return every book
fetch('/api/board/food')
  .then(response => response.json())
  .then(function (data) {
    // For each book that our server sends us back
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

      // append the well to the well section
      document.querySelector('#well-section').insertAdjacentHTML('afterbegin', wellSection)
    }
  })
/* eslint-enable no-undef */
