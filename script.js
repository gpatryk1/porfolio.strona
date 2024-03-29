

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
    delay: 900,
    origin: 'left',
    distance: '600px'
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
    origin: 'right',
    distance: '800px'
  });
  
  sr.reveal('.heading5', {
    delay: 300,
    origin: 'leftt',
    distance: '700px'
  });
  
  sr.reveal('.container1', {
    delay: 500,
    origin: 'left',
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
  sr.reveal('.icons-container', {
    delay: 500,
    origin: 'left',
    distance: '500px'
  });
  sr.reveal('.descriptions-container', {
    delay: 400,
    origin: 'rightm',
    distance: '900px'
  });
  sr.reveal('.port', {
    delay: 700,
    origin: 'rightm',
    distance: '900px'
  });

  

 
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.icon').forEach(function (icon) {
      icon.addEventListener('click', function () {
        // Usuń klasę active z poprzednio zaznaczonej ikony
        document.querySelector('.icon.active')?.classList.remove('active');
  
        // Dodaj klasę active do aktualnie zaznaczonej ikony
        this.classList.add('active');
  
        // Pobierz rok z identyfikatora ikony
        var year = this.id.replace('icon', '');
  
        // Wywołaj funkcję showDescription z aktualnym rokiem
        showDescription(year);
      });
    });
  
    // Pokaż domyślnie opis dla "Manual Software Testing"
    showDescription(2020);
  
    // Sprawdź, czy jest zapisana ostatnio wybrana ikona w lokalnym magazynie
    var lastSelectedYear = localStorage.getItem('lastSelectedYear');
    if (lastSelectedYear) {
      // Trigger click event on the last selected icon
      document.getElementById('icon' + lastSelectedYear)?.click();
    }
  });
  
  function showDescription(year) {
    // Ukryj wszystkie opisy
    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function (desc) {
      desc.style.display = 'none';
    });
  
    // Pokaż wybrany opis
    var selectedDesc = document.getElementById('desc' + year);
    selectedDesc.style.display = 'block';
  
    // Zapisz ostatnio wybraną ikonę w lokalnym magazynie
    localStorage.setItem('lastSelectedYear', year.toString());
  }


  document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");
    audio.volume = 0.2; // Ustaw głośność na 50%
  
    // Możesz dodać dodatkową logikę, np. odtworzenie audio po otwarciu strony:
    audio.play();
  });

  