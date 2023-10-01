//The days array contains a list of the boat days and crew for the day
window.days = [
    {date: "10/2/2023",
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
        person9: { name: null , guestOf: ""},
        person10: { name: null , guestOf: ""},
        person11: { name: null , guestOf: ""},
        person12: { name: null , guestOf: ""},
        } 
    },
    {date: "10/7/2023",
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
        person9: { name: null , guestOf: ""},
        person10: { name: null , guestOf: ""},
        person11: { name: null , guestOf: ""},
        person12: { name: null , guestOf: ""},
        }
    },
    {date: "10/14/2023",
    slot: "Day",
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
        person9: { name: null , guestOf: ""},
        person10: { name: null , guestOf: ""},
        person11: { name: null , guestOf: ""},
        person12: { name: null , guestOf: ""},
        }
    },
    {date: "10/15/2023",
    slot: "Day",
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
        person9: { name: null , guestOf: ""},
        person10: { name: null , guestOf: ""},
        person11: { name: null , guestOf: ""},
        person12: { name: null , guestOf: ""},
        }
    },
    {date: "10/16/2023",
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
        person9: { name: null , guestOf: ""},
        person10: { name: null , guestOf: ""},
        person11: { name: null , guestOf: ""},
        person12: { name: null , guestOf: ""},
        }
    },
    {date: "10/17/2023",
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
        person9: { name: null , guestOf: ""},
        person10: { name: null , guestOf: ""},
        person11: { name: null , guestOf: ""},
        person12: { name: null , guestOf: ""},
        }
    },
    {date: "10/18/2023",
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
        person9: { name: null , guestOf: ""},
        person10: { name: null , guestOf: ""},
        person11: { name: null , guestOf: ""},
        person12: { name: null , guestOf: ""},
        }
    }
]

//arrow fuction for loop to count the crew for one day
const crewCount = (obj) => {
    let count = 0;
    for (const key in obj.crew) {
      if (obj.crew[key].name !== null) {
        count++;
        }
    }
    return count;
};

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
            <tr class = "count">
                <td>${crewCount(day)}/12 people</td>
                <td></td> 
            </tr>
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