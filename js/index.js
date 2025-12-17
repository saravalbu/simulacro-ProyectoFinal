document.addEventListener('scroll', () => {
    const bannerShade = document.getElementById('bannerShade')

    const overlay = document.getElementById('overlay')

    const height = window.innerHeight / 4

    if (pageYOffset >= height) {
        
        overlay.style.opacity = '1'
    }
    console.log(pageYOffset + ' de ' + window.innerHeight / 4)
})

const btnHeart = document.getElementById('btn-heart')
const btnBroken = document.getElementById('btn-broken')

let cartArray = []

btnHeart.addEventListener('click', () => {
    btnHeart.style.display = 'none'
    btnBroken.style.display = 'block'
    btnBroken.style.transform = 'scale(1.25)'

})

const bannerImage = document.getElementById('banner-image')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

const gallery = [
    'media/speculum-cuff-2-8307746.jpg',
    'media/scalpel.jpg',
    'media/electrode.jpg'
]

let imageNum = 0

bannerImage.src = gallery[0]

next.addEventListener('click', () => {
    imageNum++

    if (imageNum >= gallery.length) {
        imageNum = 0
    }
})



const cartBtn = document.getElementById('cart-btn')
const cartClose = document.getElementById('cartClose')

cartBtn.addEventListener('click', () => {
    const carrito = document.getElementById('carrito')
    carrito.style.display = 'block'
})

cartClose.addEventListener('click', () => {
    carrito.style.display = 'none'
})


