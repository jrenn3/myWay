/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const { initializeApp } = require("firebase/app");
const { getDatabase, ref, onValue, get } = require("firebase/database");
const { last } = require("lodash");
const nodemailer = require('nodemailer');
const moment = require('moment')
const cron = require('node-cron');

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

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

exports.rsvpChangeTrigger = functions.database
  .dataRefRSVPs
  .onWrite(async (change, context) => {

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
            let emailContent = '<p>My Way crew changes in the last 24hrs</p><ul>';
            for (const key in changes) {
            const change = changes[key];
            let guestSyntax = '';
            if(change.person.guestOf !== "" && change.person.guestOf !== null && change.person.guestOf !== undefined){
                guestSyntax = ` (guest of ${change.person.guestOf})`
            }
            emailContent += `<li>${change.change_type} ${change.person.name}${guestSyntax} from/to ${change.day} (occured  ${change.timestamp})</li>`;
            }
            emailContent += '</ul>';
            return emailContent;
        }

        async function sendEmail(content) {
            let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'jrenn3@gmail.com',
                pass: 'hewx qyni ahdm ngyq'
            }
            });
        
            let mailOptions = {
            from: 'jrenn3@gmail.com',
            to: 'rennerjm@icloud.com',
            subject: 'My Way RSVPs',
            html: content
            };
        
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        }

        async function main() {
            const last24hrChanges = await get24hrRSVPs(dataRefRSVPs);
            const formattedChanges = formatEmail(last24hrChanges);
            sendEmail(formattedChanges);
        };

    });

console.log('Scheduler is running...');

function stopCronJob() {
  task.stop();
  console.log('Scheduler has been stopped.');
} 

// Check command-line arguments
if (process.argv.includes('--stop')) {
  stopCronJob();
}