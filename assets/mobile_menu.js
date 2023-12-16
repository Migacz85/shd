var mobileMenu = document.getElementsByClassName('top-nav');
//For sticky menu to showup
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
     mobileMenu[0].classList.add('active');
  } else {
    mobileMenu[0].classList.remove('active');
  }

});

// Remove middle line of hamburger on click
var menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('change', function() {
        var menuButton = document.querySelector('.menu-button');
        if (menuToggle.checked) {
        menuButton.style.backgroundColor = '#00000000';
        } else {
        if (window.scrollY > 50) {
        menuButton.style.backgroundColor = 'black'; 
        }
        else {
        menuButton.style.backgroundColor = 'white'; }
        }
    });

    
//For second logo to appear
document.addEventListener('DOMContentLoaded', function() {
    var mobileMenu = document.getElementsByClassName('top-nav');
    var logo1 = document.getElementById('logo1');
    var logo2 = document.getElementById('logo2');
    var menuButton = document.querySelector('.menu-button');
    var menuToggle = document.getElementById('menu-toggle');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 50) {
            mobileMenu[0].classList.add('active');
            logo1.style.display = 'none';
            logo2.style.display = 'block';
            menuButton.style.backgroundColor = 'black'; 

            if (menuToggle.checked) { 
            menuButton.style.backgroundColor = '#00000000';
            }

        } else {
            mobileMenu[0].classList.remove('active');
            logo1.style.display = 'block';
            logo2.style.display = 'none';
            menuButton.style.backgroundColor = 'white'; 
        
            if (menuToggle.checked) { 
            menuButton.style.backgroundColor = '#00000000';
            }

        }

    });

});

