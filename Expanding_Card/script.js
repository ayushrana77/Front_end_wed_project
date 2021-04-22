const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click',() => {
        remove_active_class()
        panel.classList.add('active')
    })
})

function remove_active_class()
{
    panels.forEach(panel =>{
        panel.classList.remove('active');
        })
}