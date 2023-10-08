
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
    to data.*/
import { getDatabase, ref, onValue } from "firebase/database";

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

/**Function to fetch data from the database
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
        resolve(data);
      } else {
        reject("No data available");
      }
      }, (error) => {
        reject("Error reading data: " + error.message);
    });
  });
}

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

//render a single day
//FIX THE DATE CLASS
//ADD BACK THE COUNT OF CREW OUT OF TOTAL
//Consider using a template literal loop or a more dynamic approach to avoid repetitive code for the crew members.
function renderDay(day) {
    return `
    <div class = "day">
    <p class = "date">${day.date}</p>
    <p class = "slot">${day.slot}</p>
    <p class = "event">${day.event}</p>
    <table id = "crew-${day.date}">
        <tr class = "header">
            <td>Crew</td>
            <td>Guest of</td> 
        </tr>
        ${day.crew.person1.name ? `<tr class = "person1">
            <td class = "name">${day.crew.person1.name}</td>
            <td class = "guestOf">${day.crew.person1.guestOf}</td>
        </tr>` : ""}
        ${day.crew.person2.name ? `<tr class = "person">
            <td class = "name">${day.crew.person2.name}</td>
            <td class = "guestOf">${day.crew.person2.guestOf}</td>
        </tr>` : ""}
        ${day.crew.person3.name ? `<tr class = "person">
            <td class = "name">${day.crew.person3.name}</td>
            <td class = "guestOf">${day.crew.person3.guestOf}</td>
        </tr>` : ""}
        ${day.crew.person4.name ? `<tr class = "person">
            <td class = "name">${day.crew.person4.name}</td>
            <td class = "guestOf">${day.crew.person4.guestOf}</td>
        </tr>` : ""}
        ${day.crew.person5.name ? `<tr class = "person">
            <td class = "name">${day.crew.person5.name}</td>
            <td class = "guestOf">${day.crew.person5.guestOf}</td>
        </tr>` : ""}
        ${day.crew.person6.name ? `<tr class = "person">
            <td class = "name">${day.crew.person6.name}</td>
            <td class = "guestOf">${day.crew.person6.guestOf}</td>
        </tr>` : ""}
        ${day.crew.person7.name ? `<tr class = "person">
            <td class = "name">${day.crew.person7.name}</td>
            <td class = "guestOf">${day.crew.person7.guestOf}</td>
        </tr>` : ""}
        ${day.crew.person8.name ? `<tr class = "person">
            <td class = "name">${day.crew.person8.name}</td>
            <td class = "guestOf">${day.crew.person8.guestOf}</td> 
        </tr>` : ""}
        ${day.crew.person9.name ? `<tr class = "person">
            <td class = "name">${day.crew.person9.name}</td>
            <td class = "guestOf">${day.crew.person9.guestOf}</td>
        </tr>` : ""}
        ${day.crew.person10.name ? `<tr class = "person">
            <td class = "name">${day.crew.person10.name}</td>
            <td class = "guestOf">${day.crew.person10.guestOf}</td>
        </tr>` : ""}
        ${day.crew.person11.name ? `<tr class = "person">
            <td class = "name">${day.crew.person11.name}</td>
            <td class = "guestOf">${day.crew.person11.guestOf}</td>
        </tr>` : ""}
        ${day.crew.person12.name ? `<tr class = "person">
            <td class = "name">${day.crew.person12.name}</td>
            <td class = "guestOf">${day.crew.person12.guestOf}</td>
        </tr>` : ""}
    </table>
    <input type="text" id="nameInput-${day.date}" placeholder="New name">
    <input type="text" id="guestOfInput-${day.date}" placeholder="Guest of...">
    <input type="text" id="phoneInput-${day.date}" placeholder="Phone number">
    <button onclick="addName()">Add Name</button>  
  </div>
  `;
}


//2)THEN FIGURE OUT SYNTAX FOR UPDATING THE SERVER DATABASE IN REALTIME
//3)THEN IT IS READY TO SHARE
//4)ADD AUTHENTICATION

function render(days) {
  const element = document.querySelector("#expeditions");
  fetchDataFromDatabase()
    .then((data) => {
      const dataValues = Object.values(data);//PUT THE OBJECTS IN AN ARRAY SO THE .map CAN WORK
      element.innerHTML = dataValues.map(renderDay).join("");
    })
    .catch((error) => {
      // Handle errors or the case when no data is available
      console.error(error);
    });
}

function main() {
  fetchDataFromDatabase()
    .then((data) => {
      render(data);
    })
    .catch((error) => {
      // Handle errors or the case when no data is available
      console.error(error);
    });
}

window.addEventListener("DOMContentLoaded", main);
//MAKE SURE TO npx webpack IN THE TERMINAL AFTER SAVING