import { ref, push, set, get } from "firebase/database";
import { db, fetchDataFromDatabase } from './data';
import { main } from './index'
import { render } from './render';

//BUTTON SYNTAX
export function addName(event) {
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
        main(); // Re-render the page
        })
        .catch((error) => {
        console.error("Error retrieving crew data: " + error.message);
        });
    main();
}

export function removeName(event) {
    const date = event.target.id.slice(11, 19);
    const index = event.target.id.slice(20, 22);

    const crewRef = ref(db, `/${date}/crew`);
    get(crewRef)
    .then((snapshot) => {
    const currentCrew = snapshot.val() || [];
    if (index >= 0 && index < currentCrew.length) {
        currentCrew.splice(index, 1); // Remove the member from the array
        set(crewRef, currentCrew); // Update the crew array in the database
        main(); // Re-render the page
    }
    })
    .catch((error) => {
    console.error("Error retrieving crew data: " + error.message);
    });
}

export function showDetails(event) {
    const date = event.target.id.slice(7, 16);
    const details = document.getElementById(`details-${date}`);
    details.classList.toggle('hidden');
    this.innerText = this.innerText==="Expand" ? "Collapse" : "Expand";
}

document.querySelector('#toggleDays').addEventListener('click', function() {
    const showPast = this.innerText === "Show Past";
    fetchDataFromDatabase()
    .then((data) => {
        render(data, showPast, function() {buttonListeners()})});
    this.innerText = showPast ? "Show Upcoming" : "Show Past";
    buttonListeners();
});

export function buttonListeners() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        if (button.id.startsWith("addName")) {
        button.addEventListener("click", addName);
        } else if (button.id.startsWith("removeName")) {
        button.addEventListener("click", removeName);
        } else if (button.id.startsWith("expand")) {
        button.addEventListener("click", showDetails);
        }
    });
}