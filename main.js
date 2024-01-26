// Wait for the HTML document to fully load before executing JavaScript.
document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code goes here.

  // Example: Get a reference to an HTML element by its ID.
  const myElement = document.getElementById("myElementId");

  // Example: Add an event listener to an element.
  myElement.addEventListener("click", function () {
    // Your event handling code goes here.
  });

  // Example: Manipulate the DOM.
  function updateElement() {
    // Modify the content or style of an element.
    myElement.innerHTML = "Hello, World!";
    myElement.style.color = "blue";
  }

  // Call your custom functions or execute code as needed.
  updateElement();

  // Example: Fetch data from a remote server using the Fetch API.
  fetch("https://api.example.com/data")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the response as JSON.
    })
    .then((data) => {
      // Process the fetched data.
      console.log(data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
});
