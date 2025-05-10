import moment from 'moment';
import { main } from '.';
import { saveVisibleDays, loadVisibleDays} from './state'

//ICON MAPPING
const iconLookup = {
    'Day' : '../assets/icons/sun.png'
    ,'Eve' : '../assets/icons/sunset.png'
    ,'Sailing' : '../assets/icons/sailboat.png'
    ,'Regatta' : '../assets/icons/sailboat.png'
    ,'Fireworks' : '../assets/icons/fireworks.png'
    ,'Dock Party' : '../assets/icons/fireworks.png'
    ,'Play Pen' : '../assets/icons/toast.png'
    ,'Chicago Scene' : '../assets/icons/toast.png'
    ,'Lolla' : '../assets/icons/mic.png'
    ,'Black Scene' : '../assets/icons/toast.png'
    ,'Bynd Wndrld' : '../assets/icons/mic.png'
    ,'Air & Water' : '../assets/icons/jet.png'
    ,'Joe Birth' : '../assets/icons/birth.png'
    ,'Overnight' : '../assets/icons/overnight.png'
    ,"Spritz'd" :  '../assets/icons/spritz.png'
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
        <div class="row">
            <p class="date">${moment(day.date).format('ddd MMM D')}</p>
            ${slotSyntax(day.slot, day.event)}
            ${eventSyntax(day.event)}
        </div>
        <div class="row">
            <p class="crewCount">Crew count: ${crewCount}/12</p>
            <button class="expandButton" id="expand-${day.date}">Expand</button>
        </div>
        <div class="hidden" id="details-${day.date}">
            ${day.crew ? renderCrewTable(day.crew, day.date) : ""}
            <div class="newNameInputs">
                <input type="text" id="nameInput-${day.date}" placeholder="New name">
                <input type="text" id="guestOfInput-${day.date}" placeholder="Guest of...">
                <input type="text" id="phoneInput-${day.date}" placeholder="Phone number">
                <button class="addNamesButton" id="addName${day.date}">Add Name</button>
            </div>
        </div>
    </div>
    `;
}

function renderDayList(day) {
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
    let numberDaysCountdown = "";

    if(showPast) {
        filteredDays = Object.values(days).filter(day => moment(day.date, 'YYYYMMDD').isBefore(currentDate, 'day'));
        filteredDays.sort((a, b) => b.date - a.date);
        element.innerHTML = `<div class="listView">` + filteredDays.map(renderDayList).join("") +`</div>`; 
    } else {
        filteredDays = Object.values(days).filter((day) => moment(day.date, 'YYYYMMDD').isSameOrAfter(currentDate, 'day'));
        filteredDays.sort((a, b) => a.date - b.date);
        // Find the next upcoming day
        const nextDay = filteredDays.length > 0 ? filteredDays[0] : null;
        if (nextDay) {
            const nextDayMoment = moment(nextDay.date, 'YYYYMMDD');
            const duration = moment.duration(nextDayMoment.diff(currentDate));
            nextDayCountdown = `Next slot: ${duration.days()} days away`;
            numberDaysCountdown = `Slots left: ${filteredDays.length}`;
        }
        element.innerHTML = `<p>${nextDayCountdown}</p> <p>${numberDaysCountdown}</p> ${filteredDays.map(renderDay).join("")}`;
        loadVisibleDays();
    }

    if (typeof callback === "function") {
        callback();
    }
}