

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate');
        }

        else {
            sec.classList.remove('show-animate');
        }
        
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


}

const sr = ScrollReveal({
    origin: 'top',
    distance: '200px',
    duration: 2000,
    reset: true
  });
  
  // Reveal configurations for different elements
  sr.reveal('.home-content', {
    delay: 400,
    origin: 'top',
    distance: '900px'
  });
//   sr.reveal('.header', {
//     delay: 400,
//     origin: 'top',
//     distance: '700px'
//   });
  
  
//   sr.reveal('.bx-menu', { 
//     delay: 200,
//     origin: 'right',
//     distance: '500px'
//   });
  
  sr.reveal('.backlit-box', {
    delay: 600,
    origin: 'right',
    distance: '800px'
  });
  
  sr.reveal('.topline', {
    delay: 700,
    origin: 'left',
    distance: '700px'
  });
  
  sr.reveal('.icon-box', {
    delay: 600,
    origin: 'left',
    distance: '1200px'
  });
  
  sr.reveal('.img-photo', {
    delay: 800,
    origin: 'right',
    distance: '800px'
  });
  
  sr.reveal('.heading', {
    delay: 400,
    origin: 'left',
    distance: '900px'
  });
  
  sr.reveal('.about-img', {
    delay: 400,
    origin: 'right',
    distance: '900px'
  });
  
  sr.reveal('.about-content', {
    delay: 300,
    origin: 'left',
    distance: '800px'
  });
  
  sr.reveal('.heading5', {
    delay: 300,
    origin: 'left',
    distance: '700px'
  });
  
  sr.reveal('.container1', {
    delay: 400,
    origin: 'right',
    distance: '700px'
  });
  
  sr.reveal('.heading1', {
    delay: 300,
    distance: '300px'
  });
  
  sr.reveal('.heading6', {
    delay: 300,
    origin: 'left',
    distance: '200px'
  });
  
  sr.reveal('.input-box', {
    delay: 400,
    origin: 'left',
    distance: '700px'
  });
  
  sr.reveal('.textarea-field', {
    delay: 300,
    origin: 'right',
    distance: '900px'
  });
  
  // Redundant calls
  sr.reveal('.icon-box', {
    delay: 400,
    origin: 'left',
    distance: '200px'
  });
  
  sr.reveal('.btn', {
    delay: 300,
    origin: 'bottom',
    distance: '200px'
  });

  

