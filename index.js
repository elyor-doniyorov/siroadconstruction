const nav = document.querySelector('nav');
const scrollTop = document.querySelector('scrollTop');
const logoChange = document.getElementById('changeInScroll');
const navLinks = document.getElementsByClassName('nav-link');


window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100) {
    nav.classList.add('bg-dark', 'shadow');
    logoChange.classList.add('text-white');
    for(let i=0; i< navLinks.length; i++){
      navLinks[i].classList.add('text-white');
    }
  }
  else {
    nav.classList.remove('bg-dark', 'shadow');
    logoChange.classList.remove('text-white');
    for(let i=0; i< navLinks.length; i++){
      navLinks[i].classList.remove('text-white');
    }
  }
})

function scrollToTop() {
  window.scrollTo(0, 0);
}


mapboxgl.accessToken = 'pk.eyJ1IjoiZWx5b3JiZWtkb25peW9yb3YiLCJhIjoiY2xhem5uMnppMHU4bjNwb3FtdWVpN3FlbCJ9.dvKr5dmSVIW56PtRIrbK7Q';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [68.7811, 40.4915],
  zoom: 15
});
