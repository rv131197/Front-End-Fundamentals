const btn = document.querySelector('#change')
const div = document.querySelector('#container')

btn.addEventListener('click', function(e){
    div.style.backgroundColor = makeRandColor();
    e.stopPropagation();
})

div.addEventListener('click', function(){
    div.classList.toggle('hide');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}