//Handbegger menu
const menuBtn = document.querySelector('#menu');
const closeBtn = document.querySelector('#close');

const menu = document.querySelector('nav.container ul');

menuBtn.addEventListener('click', () =>{
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  close.style.display = 'inline-block'
})

menuBtn.addEventListener('click', () =>{
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  close.style.display = 'none'
})



//swiper testimonial section

// const swiper = new Swiper('.swiper', {
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//     },
//     autoplay:{
//         delay:2500,
//         disableOnInteraction:false
//     }
//   });

const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });


// const swiper = new Swiper('.container swiper', {
//     speed: 600,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false
//     },
//     slidesPerView: 'auto',
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20
//       },

//       1200: {
//         slidesPerView: 3,
//         spaceBetween: 20
//       }
//     }
//   });


//Validate form
function validateForm(){
  var name = document.forms['contactForm']['name'].value;
  var email = document.forms['contactForm']['email'].value;
  var subject = document.forms['contactForm']['subject'].value;
  var message = document.forms['contactForm']['message'].value;

  if (name == '' || hasNumber(name)){
    alert('Name must be filled out and must only contain letters');
    return false;
  }
  else if(email == '' && subject == ''){
    alert('Email or Subject must be filled out');
    return false;
  }
  else if(!(email.includes('@'))){
    alert('Email seems not to be valid');
    return false;
  }
  else if(hasNumber(subject)){
    alert('Subject must contain only letters')
    return false;
  }
  else if(message == ''){
    alert('Message must be fiiled out');
    return false;
  }
  else{
    //confirm or cancel
    return confirm('Do you really want to send the message?')
  }
}