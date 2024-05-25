// Function to save the state of visible "day" divs to localStorage
export function saveVisibleDays() {
    const days = document.querySelectorAll('[id^="details-"]');
    const visibleDays = [];
    days.forEach(day => {
        const date = day.id.slice(7, 16);
        if (!day.classList.contains('hidden')) {
            visibleDays.push(date);
        }
    });
    localStorage.setItem('visibleDays', JSON.stringify(visibleDays));
}

// Function to load and set the visibility of "day" divs from localStorage
export function loadVisibleDays() {
    const visibleDays = JSON.parse(localStorage.getItem('visibleDays')) || [];
    const days = document.querySelectorAll('[id^="details-"]');

    days.forEach(day => {
        const date = day.id.slice(7, 16);
        if (visibleDays.includes(date)) {
            day.classList.remove('hidden');
        } 
        // else {
        //     day.classList.add('hidden');
        // }
    });
}