import { fetchDataFromDatabase } from './data';
import { render } from './render';
import { addName, removeName, showDetails, buttonListeners } from './events';

export function main() {
fetchDataFromDatabase()
  .then((data) => {
    render(data, false, function() {buttonListeners()});
  })
  .catch((error) => { 
    console.error(error);
  });
}

window.addEventListener("DOMContentLoaded", main);//Adds event listener to the window after the page is loaded