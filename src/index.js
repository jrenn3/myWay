import { fetchDataFromDatabase } from './data';
import { render } from './render';
import { addName, removeName, showDetails } from './events';

export function main() {
fetchDataFromDatabase()
  .then((data) => {
    render(data, false, function() {
      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        if (button.id.startsWith("addName")) {
          button.addEventListener("click", addName);
        } else if (button.id.startsWith("removeName")) {
          button.addEventListener("click", removeName);
        } else if (button.id.startsWith("expand")) {
          button.addEventListener("click", showDetails);
        }
      });
    });
  })
  .catch((error) => { 
    console.error(error);
  });
}

window.addEventListener("DOMContentLoaded", main);//Adds event listener to the window after the page is loaded