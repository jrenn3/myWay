import moment from 'moment';

//ICON MAPPING
const iconLookup = {
    'Day' : '../assets/icons/sun.png',
    'Eve' : '../assets/icons/sunset.png',
    'Sailing' : '../assets/icons/sailboat.png',
    'Fireworks' : '../assets/icons/fireworks.png',
    'Play Pen' : '../assets/icons/toast.png'
}

function getIcon (iconKey) {
    return iconLookup[iconKey]
}

//RENDERING
function renderCrewTable(crew, date) {
    const tableSyntax = 
        `<table id="crew-${date}">
            <tr class="header">
                <td>Crew</td>
                <td>Guest of</td>
                <td></td>
            </tr>`
    const crewSyntax = crew
        .map((member, index) => {
            return `
            <tr class="person">
                <td class="name">${member.name}</td>
                <td class="guestOf">${member.guestOf}</td>
                <td><button class="removeNameButton" id="removeName-${date}-${index}">-</button></td>
            </tr>
            `;
            })
        .join("");
    return tableSyntax + crewSyntax + `</table>`;
}

function slotSyntax(slot, event){
    return `<p class="slot">${slot}<img src="${getIcon(slot)}" alt="${event}" class="icon"></p>`;
}

function eventSyntax(event){
    let eventSyntax = '';
    if(event !== "" && event !== null && event !== undefined){
        const eventIcon = `<img src="${getIcon(event)}" alt="${event}" class="icon">`;
        eventSyntax = `<p class="event">${event}${eventIcon}</p>`
    }
    return eventSyntax;
}

function renderDay(day) {
    const crewCount = day.crew ? day.crew.length : 0;

    return `
    <div class="day">
        <p class="date">${moment(day.date).format('ddd MMM D')}</p>
        ${slotSyntax(day.slot, day.event)}
        ${eventSyntax(day.event)}
        ${day.crew ? renderCrewTable(day.crew, day.date) : ""}
        <p class="crewCount">Crew count: ${crewCount}/12</p>
        <div class="newNameInputs">
            <input type="text" id="nameInput-${day.date}" placeholder="New name">
            <input type="text" id="guestOfInput-${day.date}" placeholder="Guest of...">
            <input type="text" id="phoneInput-${day.date}" placeholder="Phone number">
            <button id="addName${day.date}">Add Name</button>
        </div>
    </div>
    `;
}

function renderDayShort(day) {
    return `
    <div class="listDay">
        <p class="date">${moment(day.date).format('ddd MMM D')}</p>
        ${slotSyntax(day.slot, day.event)}
        ${eventSyntax(day.event)}
    </div>
    `;
}

export function render(days, showPast, callback) {
    const element = document.querySelector("#expeditions");
    const currentDate = moment(); // Use moment object for easier manipulation
    let filteredDays;
    let nextDayCountdown = "";

    if(showPast) { //if 
        filteredDays = Object.values(days).filter(day => moment(day.date, 'YYYYMMDD').isBefore(currentDate));
        filteredDays.sort((a, b) => b.date - a.date);
        element.innerHTML = `<div class="listView">` + filteredDays.map(renderDayShort).join("") +`</div>`; 
    } else {
        filteredDays = Object.values(days).filter((day) => moment(day.date, 'YYYYMMDD').isSameOrAfter(currentDate));
        filteredDays.sort((a, b) => a.date - b.date);

        // Find the next upcoming day
        const nextDay = filteredDays.length > 0 ? filteredDays[0] : null;
        if (nextDay) {
            const nextDayMoment = moment(nextDay.date, 'YYYYMMDD');
            const duration = moment.duration(nextDayMoment.diff(currentDate));
            nextDayCountdown = `Next boat day: ${duration.months()} months, ${duration.days()} days`;
        }
        element.innerHTML = nextDayCountdown + filteredDays.map(renderDay).join("");
    }

    if (typeof callback === "function") {
        callback();
    } 
}