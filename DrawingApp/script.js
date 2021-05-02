const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const colorEl = document.getElementById('color')
const clearEl = document.getElementById('clear')
const sizeEl = document.getElementById('size')
let size = 10
let isPress = false
let color ='black'
let x
let y
increase.addEventListener('click',()=>
{
    size += 5;
    if(size >50)
    {
        size = 50;
    }
    sizeEl.innerText=size


})
decrease.addEventListener('click',()=>
{
    size -= 5;
    if(size <5)
    {
        size = 5;
    }
    sizeEl.innerText=size
})
colorEl.addEventListener('change', (e) => color = e.target.value)
clearEl.addEventListener('click', () => ctx.clearRect(0,0,canvas.width,canvas.height))
canvas.addEventListener('mousedown',(e) =>{
    isPress = true
    x=e.offsetX
    y=e.offsetY
})
canvas.addEventListener('mouseup',(e) =>{
    isPress = false
    x=e.offsetX
    y=e.offsetY
})
canvas.addEventListener('mousemove',(e) =>{
    if(isPress){
        const x1=e.offsetX
        const y1=e.offsetY
        drawCircle(x1,y1)
        drawLine(x,y,x1,y1);
        x=x1
        y=y1
    }
})

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2)
    ctx.fillStyle = color
    ctx.fill()
}
function drawLine(x1,y1,x2,y2)
{
   ctx.beginPath()
   ctx.moveTo(x1,y1)
   ctx.lineTo(x2,y2)
   ctx.strokeStyle = color
   ctx.lineWidth = size*2
   ctx.stroke()
}

