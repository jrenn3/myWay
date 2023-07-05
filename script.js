class person {
    constructor (name, guestOf){
        this.name = name;
        this.guestOf = guestOf;
    }
}

//The days array contains a list of the boat days and crew for the day
window.days = [
    {date: 6/5/2023,
    slot: Eve,
    crew: {
        person1: new person ("Jerry" , ""),
        person2: new person ("Joe" , ""),
        person3: new person ("Sean" , ""),
        person4: new person ("Ian" , ""),
        person5: new person ("Marsh" , ""),
        person6: new person ("Johnny" , ""),
        person7: new person ("Kirsten" , "Jerry"),
        person8: new person ("Marrisa" , "Joe"),
        person9: new person ("" , ""),
        person10: new person ("" , ""),
        person11: new person ("" , ""),
        person12: new person ("" , "")
        }
    },
    {date: 6/15/2023,
    slot: Eve,
    crew: {
        person1: new person ("Jerry" , ""),
        person2: new person ("Joe" , ""),
        person3: new person ("Sean" , ""),
        person4: new person ("Ian" , ""),
        person5: new person ("Marsh" , ""),
        person6: new person ("Johnny" , ""),
        person7: new person ("Kirsten" , "Jerry"),
        person8: new person ("Marrisa" , "Joe"),
        person9: new person ("" , ""),
        person10: new person ("" , ""),
        person11: new person ("" , ""),
        person12: new person ("" , "")
        }
    }
]

//render a single day
function renderDays(day) {
    const day = {
        date, 
        slot, 
        person1: {name, guestOf}, 
        person2: {name, guestOf}, 
        person3: {name, guestOf}, 
        person4: {name, guestOf}, 
        person5: {name, guestOf}, 
        person6: {name, guestOf}, 
        person7: {name, guestOf}, 
        person8: {name, guestOf}, 
        person9: {name, guestOf}, 
        person10: {name, guestOf}, 
        person11: {name, guestOf}, 
        person12: {name, guestOf}}
    return `
        <div class = "expedition">
            <p class = "expeditionDate">${date}</p>
            <p class = "expeditionSlot">${slot}</p>
            <hr>
            <div class = "crewHeader">
                <p>Crew</p>
                <p>Guest of</p> 
            </div>
            <hr>
            <div class = "crew">
                <div class = "person">
                    <p class = "name">${person1.name}</p>
                    <p class = "guestOf">${person1.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${person2.name}</p>
                    <p class = "guestOf">${person2.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${person3.name}</p>
                    <p class = "guestOf">${person3.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${person4.name}</p>
                    <p class = "guestOf">${person4.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${person5.name}</p>
                    <p class = "guestOf">${person5.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${person6.name}</p>
                    <p class = "guestOf">${person6.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${person7.name}</p>
                    <p class = "guestOf">${person7.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${person8.name}</p>
                    <p class = "guestOf">${person8.guestOf}</p> 
                </div>
                <div class = "person">
                    <p class = "name">${person9.name}</p>
                    <p class = "guestOf">${person9.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${person10.name}</p>
                    <p class = "guestOf">${person10.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${person11.name}</p>
                    <p class = "guestOf">${person11.guestOf}</p>
                </div>
                <div class = "person">
                    <p class = "name">${person12.name}</p>
                    <p class = "guestOf">${person12.guestOf}</p>
                </div>
            </div>
        </div>
    `;
}

// const people = document.querySelectorAll(".person"); //create an array of all the people
// const crew = document.querySelector(".crew"); //select first person in the crew

// for (let person of people){ //loop through each person in array people
//     if (person.innerText.trim() === ""){ //if there is no person
//         crew.removeChild(person); //remove from the crew
//     }
// }