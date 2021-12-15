const btn = document.querySelector('button')
const h1 = document.querySelector('h1')

btn.onclick = addEventListener('click', function(){
    const newColor = RandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

function RandColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}