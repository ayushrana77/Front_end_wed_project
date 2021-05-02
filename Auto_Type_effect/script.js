const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = 'We Love Programming'
let idx =1
let speed = 300/speedEl.value


wrtingText()

function wrtingText()
{
    textEl.innerText = text.slice(0,idx)
    idx++

    if(idx == text.length){
        idx = 1
    }
   
    setTimeout(wrtingText,speed)
}

speedEl.addEventListener('input',(e) => speed = 300/e.target.value)