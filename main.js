// Storing references of all the required DOM elements
const wrapper = document.querySelector('.wrapper')
const umbrella = document.querySelector('.wrapper_umbrella-holder')
const colorPalette = document.querySelectorAll('.wrapper_color-palette ul li')
const logoInput = document.querySelector('#logoInput')
const label = document.querySelector('.wrapper_info input + label')
const preloader = document.querySelector('.preloader')
const uploadIcon = document.querySelector('.wrapper_info img')
const displayedLogo = document.querySelector('.wrapper_display-logo')
let uploadedLogo = ''   

// Handling file uploads
logoInput.addEventListener('change', function (e) {

    preloader.style.display = 'block'
    umbrella.style.visibility = 'hidden'
    uploadIcon.src = './assets/loader_icon.svg'
    uploadIcon.style.animation = 'spinner 2s linear infinite'

    // Forcing a delay for preloading effect to illustrate real-time server requests
    setTimeout(() => {
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
            uploadedLogo = fileReader.result
            document.querySelector('.wrapper_display-logo').style.backgroundImage = `url(${uploadedLogo})`
        })
        
        fileReader.readAsDataURL(this.files[0])
        label.innerHTML = e.target.value.split('\\').pop().substring(0,20)
    
        preloader.style.display = 'none'
        umbrella.style.visibility = 'visible'
        uploadIcon.src = './assets/upload_icon.png'
        uploadIcon.style.animation = null
    }, 3000)
})

// Handling color selection
colorPalette.forEach(color => color.addEventListener('click', colorSelector))

function colorSelector(e) {
    colorPalette.forEach(color => {
        if (color.classList.contains('active')) {
            color.classList.remove('active')
        }
    })
    e.target.classList.add('active')

    preloader.style.display = 'block'
    umbrella.style.backgroundImage = 'url()'
    displayedLogo.style.visibility = 'hidden'

    // Forcing a delay for preloading effect to illustrate real-time server requests
    setTimeout(() => {

        switch (e.target.id) {
            case 'black':
                wrapper.style.backgroundColor = '#2d292640'
                umbrella.style.backgroundImage = "url(./assets/Black_umbrella.png)"
                label.style.backgroundColor = '#2d2926'
                break
    
            case 'grey':
                wrapper.style.backgroundColor = '#70737240'
                umbrella.style.backgroundImage = "url(./assets/Grey_umbrella.png)"
                label.style.backgroundColor = '#707372'
                break
    
            case 'dBlue':
                wrapper.style.backgroundColor = '#00305740'
                umbrella.style.backgroundImage = "url(./assets/DarkBlue_umbrella.png)"
                label.style.backgroundColor = '#003057'
                break
    
            case 'pink':
                wrapper.style.backgroundColor = '#d0006f40'
                umbrella.style.backgroundImage = "url(./assets/Pink_umbrella.png)"
                label.style.backgroundColor = '#d0006f'
                break
    
            case 'blue':
                wrapper.style.backgroundColor = '#00a3e040'
                umbrella.style.backgroundImage = "url(./assets/Blue_umbrella.png)"
                label.style.backgroundColor = '#00a3e0'
                break
    
            case 'yellow':
                wrapper.style.backgroundColor = '#fdda6840'
                umbrella.style.backgroundImage = "url(./assets/Yellow_umbrella.png)"
                label.style.backgroundColor = '#fdda68'
                break
    
            case 'orange':
                wrapper.style.backgroundColor = '#e8772240'
                umbrella.style.backgroundImage = "url(./assets/Orange_umbrella.png)"
                label.style.backgroundColor = '#e87722'
                break
    
            case 'red':
                wrapper.style.backgroundColor = '#ef334040'
                umbrella.style.backgroundImage = "url(./assets/Red_umbrella.png)"
                label.style.backgroundColor = '#ef3340'
                break
    
        }

    preloader.style.display = 'none'
    displayedLogo.style.visibility = 'visible'

    }, 3000)
}


