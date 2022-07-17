const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const newYears = '1 Jan 2023';

function countdown(){
    // New Years Date
    const newYearsDate = new Date(newYears);
    
    // Current date
    const currentDate = new Date();

    // Seconds 
    const total_seconds = (newYearsDate - currentDate) / 1000;

    // Days
    const days = Math.floor(total_seconds / 3600 / 24);

    // Hours
    const hours = Math.floor(total_seconds / 3600) % 24;

    // Minutes
    const minutes = Math.floor(total_seconds / 60) % 60;

    // Seconds
    const seconds = Math.floor(total_seconds) % 60;
    
    daysEl.innerHTML = days; 
    hoursEl.innerHTML = format_time(hours);
    minutesEl.innerHTML = format_time(minutes);
    secondsEl.innerHTML = format_time(seconds);
}

function format_time(time){
    return time < 10 ? (`0${time}`) : time;
}

// Initial call to the function
countdown();

// Call countdown() function every second
setInterval(countdown, 1000)