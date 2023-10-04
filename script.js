function fetchData() {
    return fetch('days.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data; // This is the JavaScript object parsed from the JSON file
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error; // You can handle the error as needed
        });
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

    
    var rowData = { name: name, guestOf: guestOf, phone: phone };
    
    //****LEFT OFF HERE-FIND A WAY TO UPDATE SOME BACKGROUND DATA FOR A NEW TEAM MEMBER
    var data = {};
    data = fetchData();
    data.push(rowData);
    console.log(data);

    nameInput.value = "";
    guestOfInput.value = "";
    phoneInput.value = "";
}

function removeName(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function render() {
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

//----Render Functions----//
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

function main() {
    render();
}

window.addEventListener("DOMContentLoaded", main);