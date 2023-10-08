import _ from 'lodash';

// Initialize Firebase 
import { initializeApp } from "firebase/app";
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

const app = initializeApp(firebaseConfig);

const db = getDatabase();

const dataRef = ref(db, '/');

function fetchDataFromDatabase() {
  return new Promise((resolve, reject) => {
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Handle the data here if needed
        resolve(data);
      } else {
        // Handle the case when no data is available
        reject("No data available");
      }
    }, (error) => {
      // Handle any errors that occur during the read operation
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
function renderDay(day) {
    return `
      <table class = "day">
          <tr class = "date">
              <td>${day.date}</td>
              <td></td> 
          </tr>
          <tr class = "slot">
              <td>${day.slot}</td>
              <td></td> 
          </tr>
          <tr class = "event">
              <td>${day.event}</td>
              <td></td> 
          </tr>
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
  `;
}

//1)REFERENCE OLD VERSIONS TO ADD FORM INPUTS FOR NAME BACK
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