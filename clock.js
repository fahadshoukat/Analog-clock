const hour = document.getElementById('hr');
const minute = document.getElementById('mn');
const second = document.getElementById('sc');

setInterval(() => {

    let day = new Date();
    
    let hr = day.getHours() * 30;
    
    let min = day.getMinutes() * 6;
    
    let sec = day.getSeconds() * 6;
    
    hour.style.transform = `rotateZ(${(hr) + (min/12)}deg)`;
    
    minute.style.transform = `rotateZ(${min}deg)`;
    second.style.transform = `rotateZ(${sec}deg)`;
})

