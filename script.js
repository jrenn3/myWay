//The days array contains a list of the boat days and crew for the day
window.days = [
    {date: "10/2/2023",
    slot: "Eve",
    event: "Sailing",
    crew: {
        person1: { name: "Jerry", guestOf: "", phone: 7343652707},
        person2: { name: "Joe", guestOf: "", phone: 8104239965},
        person3: { name: "Sean", guestOf: "", phone: 4402428580},
        person4: { name: "Ian", guestOf: "", phone: 2489824359},
        person5: { name: "Marsh", guestOf: "", phone: 2487673509},
        person6: { name: "Johnny", guestOf: "", phone: 2488606056},
        person7: { name: "Kirsten", guestOf: "Jerry", phone: 6193180488},
        person8: { name: "Marissa", guestOf: "Joe", phone: 6195073910},
        person9: { name: null, guestOf: "", phone: ""},
        person10: { name: null, guestOf: "", phone: ""},
        person11: { name: null, guestOf: "", phone: ""},
        person12: { name: "", guestOf: "", phone: ""},
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
      if (obj.crew[key].name !== null && obj.crew[key].name.trim() !== "") {
        count++;
        }
    }
    return count;
};

//render a single day
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
            <p>${crewCount(day)}/12 people</p>
            <input type="text" id="nameInput-${day.date}" placeholder="New name">
            <input type="text" id="guestOfInput-${day.date}" placeholder="Guest of...">
            <input type="text" id="phoneInput-${day.date}" placeholder="Phone number">
            <button onclick="addName()">Add Name</button>  
        </div>
    `;
}

function startEdit(element) { //NEED TO REVIEW
    var cell = element.parentNode;
    var oldValue = element.innerText;
    element.contentEditable = true;
    element.focus();

    element.addEventListener("blur", function () {
        var newValue = element.innerText;
        element.contentEditable = false;
        if (oldValue !== newValue) {
            // Update the cell content and perform any necessary data update here
            oldValue = newValue;
        }
    });
}

function addName() {
    var nameInput = document.getElementById("nameInput-10/2/2023");
    var guestOfInput = document.getElementById("guestOfInput-10/2/2023");
    var phoneInput = document.getElementById("phoneInput-10/2/2023");
    var name = nameInput.value;
    var guestOf = guestOfInput.value;
    var phone = phoneInput.value;

    //FIND A WAY TO UPDATE SOME BACKGROUND DATA FOR A NEW TEAM MEMBER
    var rowData = { name: name, guestOf: guestOf, phone: phone };
    days.push(rowData);

    // ADD THE FOLLOWING BACK w/ more validation
    // if (name.trim() === "") {
    //     alert("Please enter a valid name.");
    //     return;
    // }

    // ADD TO THE TABLE
    // var table = document.getElementById("crew-10/2/2023");
    // var newRow = table.insertRow(0);
    // var cell1 = newRow.insertCell(1);
    // var cell2 = newRow.insertCell(2);
    
    // cell1.innerHTML = '<div class="editable" onclick="startEdit(this)">' + name + '</div>';
    // cell2.innerHTML = '<div class="editable" onclick="startEdit(this)">' + email + '</div>';
    // cell3.innerHTML = "<button onclick='removeName(this)'>Remove</button>";

    nameInput.value = "";
    guestOfInput.value = "";
    phoneInput.value = "";
}

function removeName(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function fetchData() {
    return fetch('days.json')
        .then(response => response.json())
        .then(data => {
            // Iterate through the data and render each day
            data.forEach(day => {
                const dayHtml = renderDay(day);
                // Append the rendered HTML to the container element
                const container = document.getElementById('expeditions'); 
                container.innerHTML += dayHtml;
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//DONT NEED ANYMORE
// function render(days) {
//     const element = document.querySelector(".expeditions");
//     element.innerHTML = days.map(renderDay).join("");
// }

function main() {
    // render(days);
    fetchData();
}

window.addEventListener("DOMContentLoaded", main);