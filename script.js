//The days array contains a list of the boat days and crew for the day
window.days = [
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
    event: "Casino Trip",
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

function render(days) {
    const element = document.querySelector(".expeditions");
    console.log(days.map(renderDay).join(""));
    element.innerHTML = days.map(renderDay).join("");
  }

  function main() {
    render(days);
  }

  window.addEventListener("DOMContentLoaded", main);