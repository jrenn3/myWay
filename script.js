// class person {
//     constructor (name, guestOf){
//         this.name = name;
//         this.guestOf = guestOf;
//     }
// }

//The days array contains a list of the boat days and crew for the day
window.days = [
    {date: 6/5/2023,
    slot: "Eve",
    crew: {
        person1: { name: "Jerry" , guestOf: ""},
        person2: { name: "Joe" , guestOf: ""},
        person3: { name: "Sean" , guestOf: ""},
        person4: { name: "Ian" , guestOf: ""},
        person5: { name: "Marsh" , guestOf: ""},
        person6: { name: "Johnny" , guestOf: ""},
        person7: { name: "Kirsten" , guestOf: "Jerry"},
        person8: { name: "Marissa" , guestOf: "Joe"},
        person9: { name: "" , guestOf: ""},
        person10: { name: "" , guestOf: ""},
        person11: { name: "" , guestOf: ""},
        person12: { name: "" , guestOf: ""},

        // person3: new person ("Sean" , ""),
        // person4: new person ("Ian" , ""),
        // person5: new person ("Marsh" , ""),
        // person6: new person ("Johnny" , ""),
        // person7: new person ("Kirsten" , "Jerry"),
        // person8: new person ("Marrisa" , "Joe"),
        // person9: new person ("" , ""),
        // person10: new person ("" , ""),
        // person11: new person ("" , ""),
        // person12: new person ("" , "")
        }
    },
    {date: 6/15/2023,
    slot: "Eve",
    crew: {
        person1: { name: "Jerry" , guestOf: ""},
        person2: { name: "Joe" , guestOf: ""},
        person3: { name: "Sean" , guestOf: ""},
        person4: { name: "Ian" , guestOf: ""},
        person5: { name: "Marsh" , guestOf: ""},
        person6: { name: "Johnny" , guestOf: ""},
        person7: { name: "Kirsten" , guestOf: "Jerry"},
        person8: { name: "Marissa" , guestOf: "Joe"},
        person9: { name: "" , guestOf: ""},
        person10: { name: "" , guestOf: ""},
        person11: { name: "" , guestOf: ""},
        person12: { name: "" , guestOf: ""},
        }
    }
]

//render a single day
function renderDay(day) {
    // const {
    //     date, 
    //     slot, 
    //     person1: {name, guestOf}, 
    //     person2: {name, guestOf}, 
    //     person3: {name, guestOf}, 
    //     person4: {name, guestOf}, 
    //     person5: {name, guestOf}, 
    //     person6: {name, guestOf}, 
    //     person7: {name, guestOf}, 
    //     person8: {name, guestOf}, 
    //     person9: {name, guestOf}, 
    //     person10: {name, guestOf}, 
    //     person11: {name, guestOf}, 
    //     person12: {name, guestOf}} = days;
    return `
        <div class = "day">
            <p class = "date">${day.date}</p>
            <p class = "slot">${day.slot}</p>
            <hr>
            <div class = "crewHeader">
                <p>Crew</p>
                <p>Guest of</p> 
            </div>
            <hr>
            <div class = "crew">
                <div class = "person">
                    <p class = "name">${day.person1.name}</p>
                    <p class = "guestOf">${day.person1.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${day.person2.name}</p>
                    <p class = "guestOf">${day.person2.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${day.person3.name}</p>
                    <p class = "guestOf">${day.person3.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${day.person4.name}</p>
                    <p class = "guestOf">${day.person4.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${day.person5.name}</p>
                    <p class = "guestOf">${day.person5.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${day.person6.name}</p>
                    <p class = "guestOf">${day.person6.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${day.person7.name}</p>
                    <p class = "guestOf">${day.person7.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${day.person8.name}</p>
                    <p class = "guestOf">${day.person8.guestOf}</p> 
                </div>
                <div class = "person">
                    <p class = "name">${day.person9.name}</p>
                    <p class = "guestOf">${day.person9.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${day.person10.name}</p>
                    <p class = "guestOf">${day.person10.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${day.person11.name}</p>
                    <p class = "guestOf">${day.person11.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${day.person12.name}</p>
                    <p class = "guestOf">${day.person12.guestOf}</p>
                </div>
            </div>
        </div>
    `;
}

function render(days) {
    const element = document.querySelector("#expeditions");
    console.log(days.map(renderDay).join(""));
    element.innerHTML = days.map(renderDay).join("");
    // loadCities(contacts);
  }

  function main() {
    render(days);
  }

  window.addEventListener("DOMContentLoaded", main);
// const people = document.querySelectorAll(".person"); //create an array of all the people
// const crew = document.querySelector(".crew"); //select first person in the crew

// for (let person of people){ //loop through each person in array people
//     if (person.innerText.trim() === ""){ //if there is no person
//         crew.removeChild(person); //remove from the crew
//     }
// }