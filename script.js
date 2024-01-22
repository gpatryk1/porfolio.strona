

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
})

  sr.reveal('.home-content',{})
  sr.reveal('.topline',{delay: 400})
  sr.reveal('.logo',{delay: 500,
    origin: 'left',   
    distance: '50px',})
  sr.reveal('.icon-box',{delay: 500,
    origin: 'left',   
    distance: '100px',})
  sr.reveal('',{delay: 200})
  sr.reveal('.img-photo',{delay: 500,
    origin: 'right',   
    distance: '50px',})

    // sr.reveal('.about',{delay: 300,
    //     origin: 'left',   
    //     distance: '50px',
    //     distance: '500px'})

        sr.reveal('.heading',{delay: 300,
            origin: 'left',   
            distance: '50px',
            interval: 200})
            
        sr.reveal('.about-img',{delay: 300,
            origin: 'right',   
            distance: '100px',
            })
        sr.reveal('.about-content',{delay: 300,
            origin: 'left',   
            
            distance: '300px'})
        sr.reveal('.heading5',{delay: 300,
            origin: 'left',   
            
            distance: '200px'})
        sr.reveal('.container1',{delay: 300,
            origin: 'right',   
            distance: '200px'})
        sr.reveal('.heading1',{delay: 300,
               
            distance: '300px'})
        sr.reveal('.heading6',{delay: 300,
               
            distance: '200px'})
        sr.reveal('.input-box',{delay: 300,
            origin: 'left',   
            distance: '300px'})
        sr.reveal('.textarea-field',{delay: 300,
            origin: 'right',   
            distance: '500px'})
        sr.reveal('.btn',{delay: 300,
            origin: 'bottom',   
            distance: '200px'})
        



  // Ustaw domyślną głośność na 50% (możesz dostosować według potrzeb)
  document.getElementById("audio").volume = 0.5;
