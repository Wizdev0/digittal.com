function displayClock() {
    const now = new
Date();

    const hours = 
now.getHours().toString().padStart(2, '0');
    const minutes = 
now.getMinutes().toString().padStart(2, '0');
    const seconds =
now.getSeconds().toString().padStart(2, '0');

     const timeString = `${hours}:${minutes}:${seconds}`;

     const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

     const dateString = 
now.toLocaleDateString('en-US', options);

document.querySelector('#time').textContent = timeString;
document.querySelector('#date').textContent = dateString;
}

displayClock();
setInterval(displayClock, 1000);

  
               