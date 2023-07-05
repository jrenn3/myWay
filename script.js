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

function renderDays(day) {
    // const { date, slot, }
    const content = `
        <div class = "expedition">
            <p class = "expeditionDate">${day.date}</p>
            <p class = "expeditionSlot">${day.slot}</p>
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
    return content;
}

// const people = document.querySelectorAll(".person"); //create an array of all the people
// const crew = document.querySelector(".crew"); //select first person in the crew

// for (let person of people){ //loop through each person in array people
//     if (person.innerText.trim() === ""){ //if there is no person
//         crew.removeChild(person); //remove from the crew
//     }
// }