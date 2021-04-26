const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})


function setTime()
{
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date =time.getDate()
    const hours = time.getHours()
    const hoursForClock =  hours > 13 ? hours%12 :hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM'
    let scaleForHours = scale(hoursForClock, 0, 11, 0, 360)
    let scaleForseconds = scale(seconds, 0, 59, 0, 360)
    let scaleForMinutes = scale(minutes, 0, 59, 0, 360)
    if(scaleForseconds === 0)
    {
        secondEl.style.transition = `none`;
    }else{
        secondEl.style.transition = `all 1s ease-in`;
    }
    if(scaleForMinutes === 0)
    {
        minuteEl.style.transition = `none`;
    }else{
        minuteEl.style.transition = `all 0.5s ease-in`;
    }
    if(scaleForHours === 0)
    {
        hourEl.style.transition = `none`;
    }else{
        hourEl.style.transition = `all 0.5s ease-in`;
    }
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scaleForHours}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scaleForMinutes}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scaleForseconds}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}
// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)