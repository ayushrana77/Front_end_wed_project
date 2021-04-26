const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click',function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop =  y- e.target.offsetTop
        const buttonLeft = x- e.target.offsetLeft
  

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = buttonTop
        circle.style.left = buttonLeft
        this.appendChild(circle)

        setTimeout(() => circle.remove() , 500)

    })
})