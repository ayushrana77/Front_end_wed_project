 const container = document.getElementById('container')
 const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

 function Add_square(i)
 {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',()=>{
        const color = colors[Math.floor(Math.random()*colors.length)]
        square.style.background = color
        square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    })
    square.addEventListener('mouseout',()=>{
        square.style.background = '#1d1d1d'
        square.style.boxShadow = '0 0 2px #000'
    })
    container.appendChild(square)
    
 }

 for(let i=0;i<500;i++)
 {
     Add_square(i)
 }