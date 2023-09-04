// class person {
//     constructor (name, guestOf){
//         this.name = name;
//         this.guestOf = guestOf;
//     }
// }

//The days array contains a list of the boat days and crew for the day
window.days = [
//     {date: "6/5/2023",
//     slot: "Eve",
//     event: "",
//     crew: {
//         person1: { name: "Jerry" , guestOf: ""},
//         person2: { name: "Joe" , guestOf: ""},
//         person3: { name: "Sean" , guestOf: ""},
//         person4: { name: "Ian" , guestOf: ""},
//         person5: { name: "Marsh" , guestOf: ""},
//         person6: { name: "Johnny" , guestOf: ""},
//         person7: { name: "Kirsten" , guestOf: "Jerry"},
//         person8: { name: "Marissa" , guestOf: "Joe"},
//         person9: { name: "" , guestOf: ""},
//         person10: { name: "" , guestOf: ""},
//         person11: { name: "" , guestOf: ""},
//         person12: { name: "" , guestOf: ""},

//         // person3: new person ("Sean" , ""),
//         // person4: new person ("Ian" , ""),
//         // person5: new person ("Marsh" , ""),
//         // person6: new person ("Johnny" , ""),
//         // person7: new person ("Kirsten" , "Jerry"),
//         // person8: new person ("Marrisa" , "Joe"),
//         // person9: new person ("" , ""),
//         // person10: new person ("" , ""),
//         // person11: new person ("" , ""),
//         // person12: new person ("" , "")
//         }
//     },
//     {date: "6/15/2023",
//     slot: "Eve",
//     event: "",
//     crew: {
//         person1: { name: "Jerry" , guestOf: ""},
//         person2: { name: "Joe" , guestOf: ""},
//         person3: { name: "Sean" , guestOf: ""},
//         person4: { name: "Ian" , guestOf: ""},
//         person5: { name: "Marsh" , guestOf: ""},
//         person6: { name: "Johnny" , guestOf: ""},
//         person7: { name: "Kirsten" , guestOf: "Jerry"},
//         person8: { name: "Marissa" , guestOf: "Joe"},
//         person9: { name: "" , guestOf: ""},
//         person10: { name: "" , guestOf: ""},
//         person11: { name: "" , guestOf: ""},
//         person12: { name: "" , guestOf: ""},
//         }
//     },
//     {date: "6/24/2023",
//     slot: "Eve",
//     event: "Fireworks",
//     crew: {
//         person1: { name: "Jerry" , guestOf: ""},
//         person2: { name: "Joe" , guestOf: ""},
//         person3: { name: "Sean" , guestOf: ""},
//         person4: { name: "Ian" , guestOf: ""},
//         person5: { name: "Marsh" , guestOf: ""},
//         person6: { name: "Johnny" , guestOf: ""},
//         person7: { name: "Kirsten" , guestOf: "Jerry"},
//         person8: { name: "Marissa" , guestOf: "Joe"},
//         person9: { name: "" , guestOf: ""},
//         person10: { name: "" , guestOf: ""},
//         person11: { name: "" , guestOf: ""},
//         person12: { name: "" , guestOf: ""},
//         }
//     },
//     {date: "7/2/2023",
//     slot: "Eve",
//     event: "",
//     crew: {
//         person1: { name: "Jerry" , guestOf: ""},
//         person2: { name: "Joe" , guestOf: ""},
//         person3: { name: "Sean" , guestOf: ""},
//         person4: { name: "Ian" , guestOf: ""},
//         person5: { name: "Marsh" , guestOf: ""},
//         person6: { name: "Johnny" , guestOf: ""},
//         person7: { name: "Kirsten" , guestOf: "Jerry"},
//         person8: { name: "Marissa" , guestOf: "Joe"},
//         person9: { name: "" , guestOf: ""},
//         person10: { name: "" , guestOf: ""},
//         person11: { name: "" , guestOf: ""},
//         person12: { name: "" , guestOf: ""},
//         }
//     },
//     {date: "7/5/2023",
//     slot: "Eve",
//     event: "Fireworks",
//     crew: {
//         person1: { name: "Jerry" , guestOf: ""},
//         person2: { name: "Joe" , guestOf: ""},
//         person3: { name: "Sean" , guestOf: ""},
//         person4: { name: "Ian" , guestOf: ""},
//         person5: { name: "Marsh" , guestOf: ""},
//         person6: { name: "Johnny" , guestOf: ""},
//         person7: { name: "Kirsten" , guestOf: "Jerry"},
//         person8: { name: "Marissa" , guestOf: "Joe"},
//         person9: { name: "" , guestOf: ""},
//         person10: { name: "" , guestOf: ""},
//         person11: { name: "" , guestOf: ""},
//         person12: { name: "" , guestOf: ""},
//         }
//     },
//     {date: "7/16/2023",
//     slot: "Day",
//     event: "",
//     crew: {
//         person1: { name: "Jerry" , guestOf: ""},
//         person2: { name: "Joe" , guestOf: ""},
//         person3: { name: "Sean" , guestOf: ""},
//         person4: { name: "Ian" , guestOf: ""},
//         person5: { name: "Marsh" , guestOf: ""},
//         person6: { name: "Johnny" , guestOf: ""},
//         person7: { name: "Kirsten" , guestOf: "Jerry"},
//         person8: { name: "Marissa" , guestOf: "Joe"},
//         person9: { name: "" , guestOf: ""},
//         person10: { name: "" , guestOf: ""},
//         person11: { name: "" , guestOf: ""},
//         person12: { name: "" , guestOf: ""},
//         }
//     },
//     {date: "7/22/2023",
//     slot: "Eve",
//     event: "Fireworks",
//     crew: {
//         person1: { name: "Jerry" , guestOf: ""},
//         person2: { name: "Joe" , guestOf: ""},
//         person3: { name: "Sean" , guestOf: ""},
//         person4: { name: "Ian" , guestOf: ""},
//         person5: { name: "Marsh" , guestOf: ""},
//         person6: { name: "Johnny" , guestOf: ""},
//         person7: { name: "Kirsten" , guestOf: "Jerry"},
//         person8: { name: "Marissa" , guestOf: "Joe"},
//         person9: { name: "" , guestOf: ""},
//         person10: { name: "" , guestOf: ""},
//         person11: { name: "" , guestOf: ""},
//         person12: { name: "" , guestOf: ""},
//         }
//     },
//     {date: "7/25/2023",
//     slot: "Eve",
//     event: "",
//     crew: {
//         person1: { name: "Jerry" , guestOf: ""},
//         person2: { name: "Joe" , guestOf: ""},
//         person3: { name: "Sean" , guestOf: ""},
//         person4: { name: "Ian" , guestOf: ""},
//         person5: { name: "Marsh" , guestOf: ""},
//         person6: { name: "Johnny" , guestOf: ""},
//         person7: { name: "Kirsten" , guestOf: "Jerry"},
//         person8: { name: "Marissa" , guestOf: "Joe"},
//         person9: { name: "" , guestOf: ""},
//         person10: { name: "" , guestOf: ""},
//         person11: { name: "" , guestOf: ""},
//         person12: { name: "" , guestOf: ""},
//         }
//     },
//     {date: "7/29/2023",
//     slot: "Eve",
//     event: "Chicago Scene Boat Party",
//     crew: {
//         person1: { name: "Jerry" , guestOf: ""},
//         person2: { name: "Joe" , guestOf: ""},
//         person3: { name: "Sean" , guestOf: ""},
//         person4: { name: "Ian" , guestOf: ""},
//         person5: { name: "Marsh" , guestOf: ""},
//         person6: { name: "Johnny" , guestOf: ""},
//         person7: { name: "Kirsten" , guestOf: "Jerry"},
//         person8: { name: "Marissa" , guestOf: "Joe"},
//         person9: { name: "" , guestOf: ""},
//         person10: { name: "" , guestOf: ""},
//         person11: { name: "" , guestOf: ""},
//         person12: { name: "" , guestOf: ""},
//         }
//     },
//     {date: "8/10/2023",
//     slot: "Eve",
//     event: "",
//     crew: {
//         person1: { name: "Jerry" , guestOf: ""},
//         person2: { name: "Joe" , guestOf: ""},
//         person3: { name: "Sean" , guestOf: ""},
//         person4: { name: "Ian" , guestOf: ""},
//         person5: { name: "Marsh" , guestOf: ""},
//         person6: { name: "Johnny" , guestOf: ""},
//         person7: { name: "Kirsten" , guestOf: "Jerry"},
//         person8: { name: "Marissa" , guestOf: "Joe"},
//         person9: { name: "" , guestOf: ""},
//         person10: { name: "" , guestOf: ""},
//         person11: { name: "" , guestOf: ""},
//         person12: { name: "" , guestOf: ""},
//         }
//     },
//     {date: "8/13/2023",
//     slot: "Eve",
//     crew: {
//         person1: { name: "Jerry" , guestOf: ""},
//         person2: { name: "Joe" , guestOf: ""},
//         person3: { name: "Sean" , guestOf: ""},
//         person4: { name: "Ian" , guestOf: ""},
//         person5: { name: "Marsh" , guestOf: ""},
//         person6: { name: "Johnny" , guestOf: ""},
//         person7: { name: "Kirsten" , guestOf: "Jerry"},
//         person8: { name: "Marissa" , guestOf: "Joe"},
//         person9: { name: "" , guestOf: ""},
//         person10: { name: "" , guestOf: ""},
//         person11: { name: "" , guestOf: ""},
//         person12: { name: "" , guestOf: ""},
//         }
//     },
//     {date: "8/16/2023",
//     slot: "Eve",
//     crew: {
//         person1: { name: "Jerry" , guestOf: ""},
//         person2: { name: "Joe" , guestOf: ""},
//         person3: { name: "Sean" , guestOf: ""},
//         person4: { name: "Ian" , guestOf: ""},
//         person5: { name: "Marsh" , guestOf: ""},
//         person6: { name: "Johnny" , guestOf: ""},
//         person7: { name: "Kirsten" , guestOf: "Jerry"},
//         person8: { name: "Marissa" , guestOf: "Joe"},
//         person9: { name: "" , guestOf: ""},
//         person10: { name: "" , guestOf: ""},
//         person11: { name: "" , guestOf: ""},
//         person12: { name: "" , guestOf: ""},
//         }
//     },
//     {date: "8/26/2023",
//     slot: "Eve",
//     crew: {
//         person1: { name: "Jerry" , guestOf: ""},
//         person2: { name: "Joe" , guestOf: ""},
//         person3: { name: "Sean" , guestOf: ""},
//         person4: { name: "Ian" , guestOf: ""},
//         person5: { name: "Marsh" , guestOf: ""},
//         person6: { name: "Johnny" , guestOf: ""},
//         person7: { name: "Kirsten" , guestOf: "Jerry"},
//         person8: { name: "Marissa" , guestOf: "Joe"},
//         person9: { name: "" , guestOf: ""},
//         person10: { name: "" , guestOf: ""},
//         person11: { name: "" , guestOf: ""},
//         person12: { name: "" , guestOf: ""},
//         }
//     },
//     {date: "9/2/2023",
//     slot: "Eve",
//     crew: {
//         person1: { name: "Jerry" , guestOf: ""},
//         person2: { name: "Joe" , guestOf: ""},
//         person3: { name: "Sean" , guestOf: ""},
//         person4: { name: "Ian" , guestOf: ""},
//         person5: { name: "Marsh" , guestOf: ""},
//         person6: { name: "Johnny" , guestOf: ""},
//         person7: { name: "Kirsten" , guestOf: "Jerry"},
//         person8: { name: "Marissa" , guestOf: "Joe"},
//         person9: { name: "" , guestOf: ""},
//         person10: { name: "" , guestOf: ""},
//         person11: { name: "" , guestOf: ""},
//         person12: { name: "" , guestOf: ""},
//         }
//     },
    {date: "9/7/2023",
    slot: "Eve",
    event: "Sailing",
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
    },
    {date: "9/12/2023",
    slot: "Eve",
    event: "Sailing",
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
    },
    {date: "9/15/2023",
    slot: "Eve",
    event: "Sailing",
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
    },
    {date: "9/16/2023",
    slot: "Eve",
    event: "Overnight Casino Trip",
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
    },
    {date: "9/27/2023",
    slot: "Eve",
    event: "Play Pen",
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

function countCrew(day) {
    //arrow fuction a for loop to count the crew for one day
}

//render a single day
function renderDay(day) {
    return `
        <div class = "day">
            <table class = "crew">
                <tr>
                    <td class = "date">${day.date}</td>
                    <td></td> 
                </tr>
                <tr>
                    <td class = "slot">${day.slot}</td>
                    <td></td> 
                </tr>
                <tr>
                    <td class = "event">${day.event}</td>
                    <td></td> 
                </tr>
                <tr>
                    <td>Crew</td>
                    <td>Guest of</td> 
                </tr>
                <tr class = "person">
                    <td class = "name">${day.crew.person1.name}</td>
                    <td class = "guestOf">${day.crew.person1.guestOf}</td>
                </tr>
                <tr class = "person">
                    <td class = "name">${day.crew.person2.name}</td>
                    <td class = "guestOf">${day.crew.person2.guestOf}</td>
                </tr>
                <tr class = "person">
                    <td class = "name">${day.crew.person3.name}</td>
                    <td class = "guestOf">${day.crew.person3.guestOf}</td>
                </tr>
                <tr class = "person">
                    <td class = "name">${day.crew.person4.name}</td>
                    <td class = "guestOf">${day.crew.person4.guestOf}</td>
                </tr>
                <tr class = "person">
                    <td class = "name">${day.crew.person5.name}</td>
                    <td class = "guestOf">${day.crew.person5.guestOf}</td>
                </tr>
                <tr class = "person">
                    <td class = "name">${day.crew.person6.name}</td>
                    <td class = "guestOf">${day.crew.person6.guestOf}</td>
                </tr>
                <tr class = "person">
                    <td class = "name">${day.crew.person7.name}</td>
                    <td class = "guestOf">${day.crew.person7.guestOf}</td>
                </tr>
                <tr class = "person">
                    <td class = "name">${day.crew.person8.name}</td>
                    <td class = "guestOf">${day.crew.person8.guestOf}</td> 
                </tr>
                <tr class = "person">
                    <td class = "name">${day.crew.person9.name}</td>
                    <td class = "guestOf">${day.crew.person9.guestOf}</td>
                </tr>
                <tr class = "person">
                    <td class = "name">${day.crew.person10.name}</td>
                    <td class = "guestOf">${day.crew.person10.guestOf}</td>
                </tr>
                <tr class = "person">
                    <td class = "name">${day.crew.person11.name}</td>
                    <td class = "guestOf">${day.crew.person11.guestOf}</td>
                </tr>
                <tr class = "person">
                    <td class = "name">${day.crew.person12.name}</td>
                    <td class = "guestOf">${day.crew.person12.guestOf}</td>
                </tr>
            </table>
        </div>
    `;
}



function render(days) {
    const element = document.querySelector("#expeditions");
    console.log(days.map(renderDay).join(""));
    element.innerHTML = days.map(renderDay).join("");
  }

// for (let person of people){ //loop through each person in array people
//     if (person.innerText.trim() === ""){ //if there is no person
//         crew.removeChild(person); //remove from the crew
//     }
// }

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