const people = document.querySelectorAll(".person"); //create an array of all the people
const crew = document.querySelector(".crew"); //select first person in the crew

for (let person of people){ //loop through each person in array people
    if (person.innerText.trim() === ""){ //if there is now person
        crew.removeChild(person); //remove from the crew
    }
}