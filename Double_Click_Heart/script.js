const loveMe = document.querySelector('.loveMe')
const times = document.getElementById('times')

let clickTime = 0
let timeclick =0
loveMe.addEventListener('click', (e) => {
    if(clickTime == 0)
    {
        clickTime = new Date().getTime()
    }else{
        if((new Date().getTime() - clickTime) <800)
        {
            createHeart(e)
            clickTime = 0
          

        }else{
           
            clickTime = new Date().getTime()
        }
    }
})


const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    
    const x =e.clientX -e.target.offsetLeft
    const y= e.clientY -e.target.offsetTop

    heart.style.left=`${x}px`
    heart.style.top= `${y}px`
    loveMe.appendChild(heart)
    times.innerText = ++timeclick
    setTimeout(() => heart.remove() ,1000)
}