import moment from 'moment';

//RENDERING
function renderCrew(crew, date) {
return crew
    .map((member, index) => {
    return `
    <tr class="person">
        <td class="name">${member.name}</td>
        <td class="guestOf">${member.guestOf}</td>
        <td><button id="removeName-${date}-${index}">-</button></td>
    </tr>
    `;
    })
    .join("");
}

//To-do: ADD BACK THE COUNT OF CREW OUT OF TOTAL
function renderDay(day) {

// Define the icon image source based on day.slot
const slotIconSrc = day.slot === "Day" ? "../assets/icons/sun.png" : (day.slot === "Eve" ? "../assets/icons/sunset.png" : "");
// Create an <img> element with the icon source
const slotIcon = slotIconSrc ? `<img src="${slotIconSrc}" alt="${day.slot}" class="icon">` : '';

//Define the icon image source using sailboat.png if day.event === "Sailing"
// const eventIconSrc = day.event === "Sailing" ? "../assets/icons/sailboat.png";
// Create an <img> element with the icon source
const eventIcon = `<img src="../assets/icons/sailboat.png" alt="${day.event}" class="icon">`;

return `
<div class="day">
    <p class="date">${moment(day.date).format('ddd MMM DD')}</p>
    <p class="slot">${day.slot}${slotIcon}</p>
    <p class="event">${day.event}${eventIcon}</p>
    <table id="crew-${day.date}">
    <tr class="header">
        <td>Crew</td>
        <td>Guest of</td>
        <td></td>
    </tr>
    ${renderCrew(day.crew, day.date)}
    </table>
    <input type="text" id="nameInput-${day.date}" placeholder="New name">
    <input type="text" id="guestOfInput-${day.date}" placeholder="Guest of...">
    <input type="text" id="phoneInput-${day.date}" placeholder="Phone number">
    <button id="addName${day.date}">Add Name</button>
</div>
`;
}

export function render(days, callback) {
const element = document.querySelector("#expeditions");
const dataValues = Object.values(days);//puts the objects into an arry so .map can work
element.innerHTML = dataValues.map(renderDay).join("");

// Call the callback function after rendering is complete
if (typeof callback === "function") {
    callback();
}
}