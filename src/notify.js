const { initializeApp } = require("firebase/app");
const { getDatabase, ref, onValue, get } = require("firebase/database");
const { last } = require("lodash");

const firebaseRSVPs = {
    apiKey: "AIzaSyAUr7UMMECM0UEFKma786IGJXmSTFk1PGo",
    authDomain: "my-way-rsvps.firebaseapp.com",
    projectId: "my-way-rsvps",
    storageBucket: "my-way-rsvps.appspot.com",
    messagingSenderId: "90987579405",
    appId: "1:90987579405:web:c99de8d118438854ef6d44",
    measurementId: "G-N8E7LF6RR7"
};

function formatTimestamp(timestamp){
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

const appRSVPs = initializeApp(firebaseRSVPs);

const dbRSVPs = getDatabase(appRSVPs);

const dataRefRSVPs = ref(dbRSVPs, '/');

last24hr = [];

async function get24hrRSVPs(db){
    const oneDayAgo = formatTimestamp(Date.now() - (24 * 60 * 60 * 1000));
    
    try {
        const snapshot = await get(db);
        const RSVPs = snapshot.val() || [];
        last24hr = RSVPs.filter(change => change.timestamp >= oneDayAgo)
        return last24hr;
    } catch(error) {
        console.error("Error retrieving data: " + error.message);
        return [];
    };
}

function formatEmail(changes) {
    let emailContent = '<h1>My Way changes in the Last 24 Hours</h1><ul>';
    for (const key in changes) {
      const change = changes[key];
      emailContent += `<li>At ${change.timestamp}, ${change.person.name} was ${change.change_type} from/to ${change.day}</li>`;
    }
    emailContent += '</ul>';
    return emailContent;
  }

async function main() {
    const last24hrChanges = await get24hrRSVPs(dataRefRSVPs);
    console.log(last24hrChanges);
    console.log("Formatted Email:", formatEmail(last24hrChanges));
}

main();