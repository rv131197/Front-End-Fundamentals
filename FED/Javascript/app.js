// const btn = document.querySelector('button')
// const h1 = document.querySelector('h1')

// btn.onclick = addEventListener('click', function(){
//     const newColor = RandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// function RandColor() {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`
// }

const ip = document.querySelector('input')
ip.addEventListener('keydown', function(e) {
    console.log(e)
})


// ip.addEventListener('keyup', function() {
//     console.log('KEYUP')
// })