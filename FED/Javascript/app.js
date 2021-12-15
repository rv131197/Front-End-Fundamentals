const ramya = document.querySelector('#ramya')
const input = document.querySelector('#dishName')
const ul = document.querySelector('#dishes')
ramya.addEventListener('submit', function(e){
    e.preventDefault()
    const newLi = document.createElement('li')
    newLi.innerText = input.value
    ul.append(newLi)
    input.value=""
})