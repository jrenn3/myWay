import _ from 'lodash';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCVEridJKO2vwHMAwD7SieDc1BA-W9Tys4",
    authDomain: "my-way-yacht.firebaseapp.com",
    databaseURL: "https://my-way-yacht-default-rtdb.firebaseio.com",
    projectId: "my-way-yacht",
    storageBucket: "my-way-yacht.appspot.com",
    messagingSenderId: "682998640889",
    appId: "1:682998640889:web:dc6d9610316b6926a2f228",
    measurementId: "G-B97V4WDN4Q"
};
 
const db = getDatabase();
const auth = getAuth();
// Initialize Firebase 
const app = initializeApp(firebaseConfig);

const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});