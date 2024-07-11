/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    /*======= Menu Show======
    validate if constant exists*/

    if(navToggle){
        navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}
      /*======= Menu Hidden========
       validate if constant exists*/

       if(navClose){
        navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    /*when click on each nav link we remove show menu*/
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },

    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: 2-56,
        },
       
      },
   
  });

/*=============== SWIPER TESTIMONIAL ===============*/
var swiperTestimonial = new Swiper(".testimonial__container", {
 grapCursor: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const form = document.getElementById('contact-project');

  if(formValue === '') {
    setError(password, 'Password is required');
} else if (passwordValue.length < 8 ) {
    setError(password, 'Password must be at least 8 character.')
} else {
    setSuccess(password);
}

/*=============== EMAIL JS 1.58hr===============*/
// const contactForm = document.getElementById('contact-form'),
// contactName = document.getElementById('contact-name'),
// contactEmail = document.getElementById('contact-email'),
// contactProject = document.getElementById('contact-project'),
// contactMessage = document.getElementById('contact-message')

// const sendEmail = (e) =>{
//   e.preventDefault()
// // Check if has value 

// if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '' ){
//     // add & remove color 

//     contactMessage.classList.remove('color-blue')
//     contactMessage.classList.add('color-red')

//     // show msg 
//     contactMessage.textContent = 'Write all the input field'
// }else{
//         //  server id  - templt id - #from - publickey 
//         emailjs.sendForm('','','')
//         .then(() =>{
//           // show msg 
//           contactMessage.classList.add('color-blue')
//           contactMessage.textContent= ('Message send')

//         //  removemsg after 5min 
//         setTimeout (() =>{
//           contactMessage.textContent =''
//         }, 5000)
//         }, (error)=>{
//           alert('oops something went wrong',error)
//         })

//         // to clear the input field 
//         contactName.value = ''
//         contactEmail.value = ''
//         contactProject.value = ''
// }

// }
// contactForm.addEventListener('submit' , sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll([id])

const scrollActive = () =>{
  const scrollY = window.pageYOffset

  section.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId)

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
          }else{
            sectionsClass.classList.remove('active-ink')
          }
  })
}
window.addEventListener('scroll',scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  // when scroll is heigher than 350 view port and scroll class tag 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollUp)
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme ='dark-theme'
const iconeTheme = 'ri-sun-line'

// previously selected (is user slected ) 
const selectedTheme = localStorage.getIteam('selected-theme')
const selectedIcon = localStorage.getIteam('selected-icon')

// we obtained the current theme that the interface has by validating the dark dark-theme class 

const getCurrentTheme =() => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon =() => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-line'

// validate if the user previously chose a topic 

if(selectedTheme){
  // if the validation is fulfilled, we ask the issue was to know if we active or deactive the dark 

   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](daekTheme)
   themeButton.classList[selectedIcon == 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

// avtive or deactive manually with b utton 
themeButton.addEventListener('click',() =>{
  // add or remove dark / icone theme 
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconeTheme)

  // we save the and the current icon that the user chose 
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())

  

})
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')

  // when the sroll is greather than 50 viewpontb add the scrollheader class to hd tag 

this.scrollY >=50 ? Headers.classList.add('bg-header')
                  : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = scrollReveal ({
  origin:'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true  animation repeat 
})

sr.reveal('.home__data, .projects__container, .testimonial__container, .footer__container')
sr.reveal('.home__info div', {delay: 600, orginal: 'buttom', intervel: 100} )
sr.reveal('.skills__container:nth-child(1), contact__content:nth-child(1)', {orginal: 'left'} )
sr.reveal('.skills__container:nth-child(2),  contact__content:nth-child(1)', {orginal: 'right'} )
sr.reveal('.qualification__content, .services__card', {intervel:100} )

// <===== form validation====> 

  // Get reference to the form and its elements
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('contact-name');
const projectInput = document.getElementById('contact-project');

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting initially

    // Trim inputs to remove any leading or trailing whitespace
    const nameValue = nameInput.value.trim();
    const projectValue = projectInput.value.trim();

    // Validate name length
    if (nameValue.length !== 4) {
        alert('Name must be exactly 4 letters long.');
        nameInput.focus(); // Set focus on the name input field
        return;
    }

    // Validate project length
    if (projectValue.length !== 10) {
        alert('Project name must be exactly 10 letters long.');
        projectInput.focus(); // Set focus on the project input field
        return;
    }

    // If all validations pass, submit the form
    form.submit();
}

// Attach event listener to the form for submission handling
form.addEventListener('submit', handleSubmit);
