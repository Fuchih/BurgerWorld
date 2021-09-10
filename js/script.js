//Facebook login API ---------------
window.fbAsyncInit = function () {
  FB.init({
    appId: '550144832925914',
    cookie: true,
    xfbml: true,
    version: 'v11.0'
  })
  FB.AppEvents.logPageView()
}
;(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) {
    return
  }
  js = d.createElement(s)
  js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
})(document, 'script', 'facebook-jssdk')

const fbLogin = document.querySelector('#facebook-btn')

fbLogin.onclick = function () {
  FB.getLoginStatus(function (response) {
    if (response.authResponse) {
      FB.api('/me', { fields: 'id,name,email' })
    } else {
      FB.login(
        function (response) {
          if (response.authResponse) {
            FB.api('/me', { fields: 'id,name,email' })
          }
        },
        { scope: 'email' }
      )
    }
  })
}

// navigation Bar transform ----------------------
const bar = document.querySelector('.bar-container')
const nav = document.querySelector('nav')
const bodyContainer = document.querySelector('.body-container')
let menu = 1

bar.addEventListener('click', function () {
  this.classList.toggle('change')
  if (menu === 1) {
    nav.style.transform = 'translateX(0)'
    bodyContainer.style.transform = 'translateX(30%)'
    menu = 0
  } else {
    nav.style.transform = 'translateX(-200%)'
    bodyContainer.style.transform = 'translateX(0)'
    menu = 1
  }
})

//Login ----------------------
const mask = document.querySelector('.mask')
const login = document.querySelector('.login-btn')
const loginContainer = document.querySelector('.login-container')
const loginClose = document.querySelector('.close')

login.addEventListener('click', function () {
  mask.style.display = 'block'
  loginContainer.style.display = 'block'
})

mask.onclick = function () {
  loginContainer.style.display = 'none'
  this.style.display = 'none'
}

loginClose.onclick = function () {
  loginContainer.style.display = 'none'
  mask.style.display = 'none'
}

//Slider ----------------------
const swiper = new Swiper('.mySwiper', {
  autoplay: {
    delay: 2000,
    disableOnInteraction: true
  },
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
