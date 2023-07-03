class person {
    constructor (name, guestOf){
        this.name = name;
        this.guestOf = guestOf;
    }
}

//The days array contains a list of the boat days and crew for the day
window.days = [
    {day: 6/5/2023,
    slot: Eve,
    crew: {
        person1: new person ("Jerry" , ""),
        person2: new person ("Joe" , ""),
        person3: new person ("Sean" , ""),
        person4: new person ("Ian" , ""),
        person5: new person ("Marsh" , ""),
        person6: new person ("Johnny" , ""),
        person7: new person ("Kirsten" , "Jerry"),
        person8: new person ("Marrisa" , "Joe"),
        person9: new person ("" , ""),
        person10: new person ("" , ""),
        person11: new person ("" , ""),
        person12: new person ("" , "")}},
    {day: 6/15/2023,
    slot: Eve,
    crew: {
        person1: new person ("Jerry" , ""),
        person2: new person ("Joe" , ""),
        person3: new person ("Sean" , ""),
        person4: new person ("Ian" , ""),
        person5: new person ("Marsh" , ""),
        person6: new person ("Johnny" , ""),
        person7: new person ("Kirsten" , "Jerry"),
        person8: new person ("Marrisa" , "Joe"),
        person9: new person ("" , ""),
        person10: new person ("" , ""),
        person11: new person ("" , ""),
        person12: new person ("" , "")}}
]

const people = document.querySelectorAll(".person"); //create an array of all the people
const crew = document.querySelector(".crew"); //select first person in the crew

for (let person of people){ //loop through each person in array people
    if (person.innerText.trim() === ""){ //if there is no person
        crew.removeChild(person); //remove from the crew
    }
}