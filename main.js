//-----------Image Event Listeners------------------------

const img1 = document.getElementById('img1')
console.log(img1)
    
img1.addEventListener('mouseover', () => {
    
    img1.style.backgroundImage = `url('Images/1.jpg')`
})

img1.addEventListener('mouseleave', () => {
    
    img1.style.backgroundImage = ''
})

// ================

const img1p = document.querySelector('#img1p')
console.log(img1p)

const Image1 = document.querySelector('.Image1')

img1p.addEventListener('click', () => {
    document.querySelector('.Image1').classList.add('.Image1-open')
})


//------ Modal Box--------------------

const openBtn = document.getElementById('openMessage');
const modal = document.getElementById('modal-box')
const close = document.getElementById('close')

//Functions
const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () => {
  modal.style.display = 'none'
}

//Event Listeners
openBtn.addEventListener('click', openModal)

close.addEventListener('click', closeModal)

