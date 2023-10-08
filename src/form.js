import { fetchDataFromDatabase } from 'index.js';

//DATA FETCH FROM FIREBASE
window.days = fetchDataFromDatabase()
  .then((data) => {
    // Use the data here in a structured format (e.g., JSON)
    return data;
  })
  .catch((error) => {
    // Handle errors or the case when no data is available
    console.error(error);
  });

function addName() {
    var nameInput = document.getElementById("nameInput");
    var guestOfInput = document.getElementById("guestOfInput");
    var phoneInput = document.getElementById("phoneInput");
    var name = nameInput.value;
    var guestOf = guestOfInput.value;
    var phone = phoneInput.value;
  

    // Determine the next available person slot (e.g., person9, person10, etc.)
    var nextPersonSlot = null;
    for (var i = 1; i <= 12; i++) {
      if (!days["crew"]["person" + i].name) {
        nextPersonSlot = "person" + i;
        break;
      }
    }
  
    if (nextPersonSlot) {
      // Add the new data to the next available person slot
      days["crew"][nextPersonSlot] = {
        "name": name,
        "guestOf": guestOf,
        "phone": phone
      };
  
      // Update the HTML form fields
      nameInput.value = "";
      guestOfInput.value = "";
      phoneInput.value = "";
  
      // Optionally, you can update the UI to reflect the changes
      // For example, re-render the day's data with the updated crew information

    } else {
      alert("No available slots for new crew members.");
    }
  }