document.addEventListener('scroll', () => {
    const bannerShade = document.getElementById('bannerShade')

    const overlay = document.getElementById('overlay')

    const height = window.innerHeight / 4

    if (pageYOffset >= height) {
        
        overlay.style.opacity = '1'
    }
    console.log(pageYOffset + ' de ' + window.innerHeight / 4)
})
