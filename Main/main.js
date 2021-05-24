//-----------Image Event Listeners------------------------
   
const img1 = document.getElementById('img1')
// const img1p = document.getElementById('img1p')
    
img1.addEventListener('mouseover', () => {
    
    img1.style.opacity = 0.75
    // img1p.style.opacity = 0

})

img1.addEventListener('mouseleave', () => {
    
    img1.style.opacity = 0
    // img1p.style.opacity = 1
})


const img2 = document.getElementById('img2')
    
img2.addEventListener('mouseover', () => {
    
    img2.style.opacity = 0.75
})

img2.addEventListener('mouseleave', () => {
    
    img2.style.opacity = 0
})


const img3 = document.getElementById('img3')
    
img3.addEventListener('mouseover', () => {
    
    img3.style.opacity = 0.75

})


img3.addEventListener('mouseleave', () => {
    
    img3.style.opacity = 0

})

const img4 = document.getElementById('img4')
    
img4.addEventListener('mouseover', () => {
    
    img4.style.opacity = 0.75
})


img4.addEventListener('mouseleave', () => {
    
    img4.style.opacity = 0
})

// ================ UI =============

// const img1p = document.querySelector('#img1p')
// console.log(img1p)

// img1p.addEventListener('click', () => {
//     document.querySelector('.ImageAdd').classList.add('.ImageAdd-open')
//     console.log('working?')
// })

// const close = document.querySelector('#imgAdd-close')
// // console.log(close)
// close.addEventListener('click', () => {
//     document.querySelector('.ImageAdd').classList.remove('.ImageAdd-open')
// })
//------ Modal Box--------------------

const openBtn = document.getElementById('openMessage');
const modal = document.getElementById('modal-box')
const close1 = document.getElementById('close')

//Functions
const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () => {
  modal.style.display = 'none'
}

//Event Listeners
openBtn.addEventListener('click', openModal)

close1.addEventListener('click', closeModal)

