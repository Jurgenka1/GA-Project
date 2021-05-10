const img1 = document.getElementById('img1')
console.log(img1)
    
img1.addEventListener('mouseover', () => {
    
    img1.style.backgroundColor = "red"
})

const img1p = document.querySelector('#img1p')

const Image1 = document.querySelector('.Image1')

const Imagine1close = document.querySelector('#img1-close')

img1p.addEventListener('click', () => {
    menu.classList.add('menu-open')
})

magine1close.addEventListener('click', () => {
    menu.classList.remove('menu-open')
})
