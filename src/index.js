
//CONFIGURATIONS
/**Initializes my Firebase project from /app which allows use of Firebase services.
  -initializeApp: function is a crucial part of Firebase because it initializes your Firebase project and 
    allows you to use Firebase services within your application.*/
import { initializeApp } from "firebase/app";
/**Imports other Firebase functions from /database that we want to use.
  -getDatabase: This function is used to obtain a reference to the Firebase Realtime Database. 
    It is typically used to initialize and access the database in your application.
  -ref: The ref function is used to create references to specific paths or locations within the 
    Firebase Realtime Database. You can use these references to read or write data at those locations.
  -onValue: This function is used to attach a callback function that will be triggered whenever the 
    data at a specified database reference changes. It's commonly used to listen for real-time updates 
    to data.
  -push: This function is used to append data to a list in the database. It generates a new child location 
    using a unique key and returns a reference to it.
    */
import { getDatabase, ref, onValue, push, set, get } from "firebase/database";

//Configuration to the My Way database
const firebaseConfig = {
    apiKey: "AIzaSyCVEridJKO2vwHMAwD7SieDc1BA-W9Tys4",
    authDomain: "my-way-yacht.firebaseapp.com",
    databaseURL: "https://my-way-yacht-default-rtdb.firebaseio.com",
    projectId: "my-way-yacht",
    storageBucket: "my-way-yacht.appspot.com",
    messagingSenderId: "682998640889",
    appId: "1:682998640889:web:dc6d9610316b6926a2f228",
    measurementId: "G-B97V4WDN4Q"
};

/**Initializes a Firebase app instance using the configuration provided in the firebaseConfig
object.
  -initializeApp function: used to set up a connection between your web application and Firebase services
    using the configuration options you've provided.
  -The resulting app object is used as a reference to your Firebase app throughout your code. You'll use 
    it to interact with various Firebase services, such as the Realtime Database, Authentication, and 
    Cloud Messaging.*/
const app = initializeApp(firebaseConfig);
/**Gets a handle to the database so that you can read or write data to it.
  -getDatabase() used to retrieve a reference to the Firebase Realtime Database associated with my Firebase
    app.*/
const db = getDatabase();
//Creates a reference to data at the root of the database
const dataRef = ref(db, '/');

//DATA DOWNLOAD
/**Function to fetch data from the database and assign it to the global variable days.
* -Promise: object represents the eventual completion (or failure) of an asynchronous operation and its
*   resulting value.
* -onValue: function is used to attach a callback function that will be triggered whenever the data at a
*   specified database reference changes. It's commonly used to listen for real-time updates to data.
* -snapshot: object contains the data from the database, and it can be used to extract the data and
*   perform any operations on it.
* -val: function is used to extract the data from the snapshot object.
* -resolve: function is used to return the data from the Promise.*/
function fetchDataFromDatabase() {
  return new Promise((resolve, reject) => {
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        window.days = resolve(data);
      } else {
        reject("No data available");
      }
      }, (error) => {
        reject("Error reading data: " + error.message);
    });
  });
}

//RENDERING
function renderCrew(crew) {
  return crew
    .map((member) => {
      return `
        <tr class="person">
          <td class="name">${member.name}</td>
          <td class="guestOf">${member.guestOf}</td>
        </tr>
      `;
    })
    .join("");
}

//To-do: ADD BACK THE COUNT OF CREW OUT OF TOTAL
function renderDay(day) {
return `
  <div class="day">
    <p class="date">${day.date}</p>
    <p class="slot">${day.slot}</p>
    <p class="event">${day.event}</p>
    <table id="crew-${day.date}">
      <tr class="header">
        <td>Crew</td>
        <td>Guest of</td>
      </tr>
      ${renderCrew(day.crew)}
    </table>
    <input type="text" id="nameInput-${day.date}" placeholder="New name">
    <input type="text" id="guestOfInput-${day.date}" placeholder="Guest of...">
    <input type="text" id="phoneInput-${day.date}" placeholder="Phone number">
    <button id="addName${day.date}">Add Name</button>
  </div>
`;
}
  
function render(days, callback) {
  const element = document.querySelector("#expeditions");
  const dataValues = Object.values(days);//puts the objects into an arry so .map can work
  element.innerHTML = dataValues.map(renderDay).join("");
  
  // Call the callback function after rendering is complete
  if (typeof callback === "function") {
    callback();
  }
}

function main() {
fetchDataFromDatabase()
  .then((data) => {
    render(data, function() {
      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.addEventListener("click", addName);
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });
}

window.addEventListener("DOMContentLoaded", main);//Adds event listener to the window after the page is loaded

//BUTTON SYNTAX
//write a function that will add a new name to the crew list based on input from the user
function addName(event) {
  //get the date key of the button that was clicked
  const date = event.target.id.slice(7, 16);

  //get the inputs from the user
  const nameInput = document.querySelector(`#nameInput-${date}`);
  const guestOfInput = document.querySelector(`#guestOfInput-${date}`);
  const phoneInput = document.querySelector(`#phoneInput-${date}`);

  //To-do: add a check to see if the name and guest of inputs are blank

  //create a new object with the input values
  const newCrewMember = {
    name: nameInput.value,
    guestOf: guestOfInput.value,
    phone: phoneInput.value
  };

  const crewRef = ref(db, `/${date}/crew`);
  get(crewRef)
    .then((snapshot) => {
      const currentCrew = snapshot.val() || []; // If the array doesn't exist yet, initialize it as an empty array
      currentCrew.push(newCrewMember); // Append the new member to the array

      // Update the crew array in the database
      set(crewRef, currentCrew);

      // Clear the input fields
      nameInput.value = "";
      guestOfInput.value = "";
      phoneInput.value = "";
    })
    .catch((error) => {
      console.error("Error retrieving crew data: " + error.message);
    });
main();
}